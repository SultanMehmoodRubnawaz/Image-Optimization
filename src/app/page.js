import FIleUpload from "@/Component/FIleUpload";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row pt-10 px-4 lg:px-20">
        {/* Left Spacer (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-2/12"></div>

        {/* Main Content */}
        <div className="flex w-full lg:w-8/12">
          <div className="flex flex-col justify-around items-start w-full">
            {/* Logo */}
            <Image
              src={"/logo.svg"}
              width={300}
              height={300}
              alt="logo"
              className="w-40 sm:w-60 md:w-72 lg:w-96 h-auto"
            />

            {/* Description */}
            <div className="text-black pt-5 text-sm sm:text-base leading-relaxed">
              This <b>online image optimizer</b> uses a smart combination of the
              best optimization and lossy compression algorithms to shrink JPEG,
              GIF and PNG images to the minimum possible size while keeping the
              required level of quality.
              <br />
              <br />
              Upload up to 20 images. Wait for the compression to finish. Click
              thumbnails in the queue for quality setting. Use the slider to
              control the compression level and mouse/gestures to compare
              images.
            </div>

            {/* Upload a file */}
            <div className="w-full my-6">
              <FIleUpload />
            </div>

            {/* Content Section */}
            <div className="px-2 sm:px-5 py-5 space-y-6 text-sm sm:text-base">
              {/* Image Compression */}
              <h2 className="text-black text-xl sm:text-2xl font-bold">
                Image Compression
              </h2>
              <p className="text-black text-justify">
                In terms of digital files, compression is the act of encoding
                information using fewer bits than what&apos;s found in the original
                file. Simply put, it means converting a large file into a
                smaller file.
              </p>
              <p className="text-black text-justify">
                There are two types of compression: lossless and lossy. Lossless
                compression is when the compression tool removes empty,
                needless, or duplicated bits from the original file. This
                results in a smaller file that has the exact same quality as the
                original. Lossy compression is when the compressor removes
                excessive or unimportant bits from the original file. This
                results in a smaller file but with a reduced quality.
              </p>

              {/* Why compress images */}
              <h2 className="text-black text-xl sm:text-2xl font-bold">
                Why would you want to compress images?
              </h2>
              <p className="text-black text-justify">
                Depending on the source of an image, the file could be quite
                large. A JPG from a professional DSLR camera, for example, could
                be dozens of megabytes. Depending on your needs, this could be
                too big. Compressing this image would be very useful.
              </p>
              <p className="text-black text-justify">
                Likewise, you might have large images on your phone. These
                images could be taking up a lot of hard drive space and
                preventing you from taking more photos. Compressing them could
                free up more internal storage, fixing this problem.
              </p>

              {/* How it works */}
              <h2 className="text-black text-xl sm:text-2xl font-bold">
                How does the image compressor work?
              </h2>
              <p className="text-black text-justify">
                Our tool uses lossy compression to shrink down image files. It
                supports three file types: PNG, JPG/JPEG, and GIF. This system
                intelligently analyzes uploaded images and reduces them to the
                smallest possible file size without negatively affecting the
                overall quality.
              </p>
              <p className="text-black text-justify">
                To begin, you&apos;ll need to upload some images you&apos;d like to
                compress. You can upload up to 20 images at once and you can
                feel free to mix and match file types. Our server can
                automatically parse out the files for you.
              </p>
              <p className="text-black text-justify">
                First, hit the “Upload Files” button and navigate to your
                images. Once uploaded, you&apos;ll see thumbnails for all your images
                arriving in the queue.
              </p>
              <p className="text-black text-justify">
                You can tweak compression with the slider, then hit “APPLY”.
                When satisfied, hit “DOWNLOAD ALL” for a ZIP file or download
                each one individually.
              </p>
              <p className="text-black text-justify">
                Ready for another batch? Hit “CLEAR QUEUE” and start again.
              </p>

              {/* Safety */}
              <h2 className="text-black text-xl sm:text-2xl font-bold">
                Is it safe to compress images?
              </h2>
              <p className="text-black text-justify">
                Your original files stay untouched on your system. If you don&apos;t
                like the compressed version, you can retry. Also, our unmanned
                system purges all data after one hour for security.
              </p>
            </div>
          </div>
        </div>

        {/* Right Spacer (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-2/12"></div>
      </div>

      {/* Footer */}
      <div className="flex flex-col justify-center items-center text-black mt-10 text-xs sm:text-sm">
        <span>All uploaded data is deleted after 1 hour</span>
        <span>
          © SIA Webby |{" "}
          <a href="#" className="text-blue-400">
            Term and Privacy
          </a>
        </span>
      </div>
    </>
  );
}
