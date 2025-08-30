// Website Reference: https://imagecompressor.com/

import FIleUpload from "@/Component/FIleUpload";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap pt-10">
        <div className="flex w-2/12"></div>

        <div className="flex w-8/12 ">
          <div className="flex flex-col justify-around items-start">
            <Image src={"logo.svg"} width={400} height={400} alt="logo"/>
            <div className="text-black pt-5">
              This <b>online image optimizer</b> uses a smart combination of the
              best optimization and lossy compression algorithms to shrink JPEG,
              GIF and PNG images to the minimum possible size while keeping the
              required level of quality. <br />
              <br />
              Upload up to 20 images. Wait for the compression to finish. Click
              thumbnails in the queue for quality setting. Use the slider to
              control the compression level and mouse/gestures to compare
              images.
            </div>

            {/* Upload a file */}
            <FIleUpload />
          </div>
        </div>

        <div className="flex w-2/12"></div>
      </div>
    </>
  );
}
