"use client";
import React, { useState } from "react";

const FileSetting = ({ selectedImage }) => {
  const [quality, setQuality] = useState(80); // default quality

  const handleCompress = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("file", selectedImage.file);
    formData.append("quality", quality);

    // send to backend API
    const res = await fetch("/api/compress", {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    // trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `compressed-${selectedImage.file.name}`;
    link.click();
  };

  return (
    <>
      {selectedImage && (
        <div className="flex flex-col border-2 border-[#F2F2F2] rounded-md shadow-md w-full max-w-3xl mx-auto p-4 space-y-6">
          <div className="text-center font-bold text-black">
            {selectedImage.file.name}
          </div>

          {/* Image Preview */}
          <div className="relative w-full h-96">
            <img
              src={selectedImage.preview}
              alt={selectedImage.file.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Quality Slider */}
          <div className="flex flex-col items-center">
            <label className="mb-2 font-medium">
              Quality: <span className="text-blue-600">{quality}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full hover:cursor-pointer"
            />
          </div>

          {/* Apply Button */}
          <button
            onClick={handleCompress}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
          >
            Apply & Download
          </button>
        </div>
      )}
    </>
  );
};

export default FileSetting;
