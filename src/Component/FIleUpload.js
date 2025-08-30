"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import FileSetting from "./FileSetting";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const FileInputRef = useRef(null);

  // Handle FileChange
  function handleFileChange(e) {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFiles(selectedFiles);
      setSelectedImage(selectedFiles[0]); // default select first image
    }
  }

  // handle Upload Files Button
  function ButtonClick() {
    FileInputRef.current?.click();
  }

  // handle Clear Files
  function handleClearFiles() {
    setFiles([]);
    setSelectedImage(null);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between border-2 border-[#F2F2F2] rounded-md shadow-md w-full max-w-3xl mx-auto p-4 space-y-6">
        {/* Top Buttons */}
        <div className="flex space-x-4">
          {/* Hidden Input file */}
          <input
            type="file"
            multiple
            ref={FileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md hover:cursor-pointer"
            onClick={ButtonClick}
          >
            <span>📂</span> UPLOAD FILES
          </button>
          <button
            className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md hover:cursor-pointer"
            onClick={handleClearFiles}
          >
            <span>❌</span> CLEAR QUEUE
          </button>
        </div>

        {/* File Cards */}
        {files.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {files.map((file, index) => (
              <div
                key={index}
                className={`border-2 rounded-md p-2 flex flex-col items-center w-32 cursor-pointer transition ${
                  selectedImage?.file.name === file.file.name
                    ? "border-green-500 bg-green-50"
                    : "border-blue-400"
                }`}
                onClick={() => setSelectedImage(file)} // select on click
              >
                <Image
                  src={file.preview}
                  alt={file.file.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
                <p className="text-blue-600 font-bold mt-2">-3%</p>
                <a href={file.preview} download={file.file.name}>
                  <button className="mt-2 px-2 py-1 bg-gray-700 hover:bg-gray-300 rounded-md text-sm text-white">
                    DOWNLOAD
                  </button>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Button */}
        <button
          className="flex items-center gap-2 bg-[#38404B] hover:bg-[#2c323a] text-white px-4 py-2 rounded-md"
          onClick={() => {
            files && files.length > 0 && console.log("Downloading all files...");
          }}
        >
          ⬇ DOWNLOAD ALL{" "}
          <span className="ml-1 bg-gray-700 px-2 py-0.5 rounded-full text-xs">
            {files.length}
          </span>
        </button>
      </div>
      {/* Pass Selected Image to FileSetting */}
      <FileSetting selectedImage={selectedImage} />
    </>
  );
};

export default FileUpload;
