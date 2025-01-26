import { useState } from "react";
export default function TranscriptionSection() {
  const content = {
    speaker1: {
      text: "Speaker labels",
      media: { type: "image", src: "/images/trans_1.png" },
    },
    speaker2: {
      text: "112+ languages",
      media: { type: "image", src: "/images/trans_2.png" },
    },
    speaker3: {
      text: "Transcript auto-paragraphing",
      media: { type: "video", src: "/videos/trans_3.mp4" },
    },
  };

  const [active, setActive] = useState("speaker1");

  return (
    <div className="flex flex-col mt-20 lg:grid lg:grid-cols-2 gap-6 items-center p-6">
      {/* Left Column: Text Section */}
      <div className="space-y-6 text-center ">
        <ul className="space-y-4">
          {Object.keys(content).map((speaker, index) => (
            <li key={index} className="">
              <button
                onClick={() => setActive(speaker)}
                className={`my-4 text-[40px] w-[60%]  ${
                  active === speaker
                    ? "text-[#ff4438] font-extrabold"
                    : "text-gray-700"
                }`}
              >
                {content[speaker].text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Content Section */}
      <div className="relative flex justify-center items-center h-72 w-full">
        <div className="absolute">
          {content[active].media.type === "image" ? (
            <img
              src={content[active].media.src}
              alt="Media Content"
              className="h-full w-auto max-w-md object-contain rounded-xl"
            />
          ) : (
            <video
              src={content[active].media.src}
              autoPlay
              className="h-full w-auto max-w-md object-contain rounded-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
