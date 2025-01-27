import { useState } from "react";

export default function HeroSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="bg-cover bg-center h-[90vh] w-[100vw]  relative md:bg-[url('https://www.plaud.ai/cdn/shop/files/Banner_3840x2160_030e8ade-e64a-4ef0-82bc-1d4621200cf3_2560x.jpg?v=1724760758')] bg-[url('https://www.plaud.ai/cdn/shop/files/750x1500_375x@2x.jpg?v=1724760757')]">
        {/* Main container divided into two sections */}
        <div className="grid  md:grid-cols-[70%_30%] h-full w-full flex flex-col md:flex-row">
          {/* Right side for mobile: YouTube thumbnail */}
          <div className="flex items-center justify-center lg:mt-40 md:order-2 md:mt-0">
            <div
              className="relative cursor-pointer"
              onClick={handleModalToggle}
            >
              <img
                src="https://www.plaud.ai/cdn/shop/files/img_v3_02e6_da33f732-22b7-49f6-947d-774a68d7dd4g_1.jpg?v=1724840909&width=600"
                alt="Video Thumbnail"
                className="w-[10rem] h-[88px] md:w-[16rem] md:h-36 object-cover rounded-lg shadow-lg"
              />
              {/* Video play icon */}
              <div className="absolute inset-0 flex items-center justify-center  rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="size-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Left side for text content */}
          <div className="flex flex-col sm:mb-40 md:justify-center  items-center lg:mb-16 md:items-start md:ml-7 text-center md:text-left mt-4 md:mt-0">
            <h1 className=" text-white text-2xl md:text-4xl mb-4 w-[90%] md:w-[45rem]">
              The World's Most Wearable AI Voice Recorder
            </h1>
            <h1 className="text-white text-5xl md:text-[5rem] mb-6 w-[85%] md:w-[30rem] leading-[1.2]">
              PLAUD NotePin
            </h1>
            <button className="bg-[#FF4438] text-white px-8 py-2 w-[10rem] rounded-3xl md:mt-0 mt-44">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-lg w-[90%] max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={handleModalToggle}
            >
              ✕
            </button>
            {/* YouTube Video */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/LVm3YG7hdQQ?si=46qc9_-8b5-GlNc0"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
