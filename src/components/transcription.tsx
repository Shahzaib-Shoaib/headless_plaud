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
    <>
      <h1 className=" flex text-center justify-center items-center md:text-6xl md:mx-72 mx-8 text-4xl ">
        Beyond just accurate transcriptions{" "}
      </h1>

      <p className="flex text-center justify-center items-center md:text-xl md:mx-60 md:my-10 text-2xl m-8 ">
        Recordings are enhanced by combining multiple advanced transcription
        features to ensure accuracy and context you can trust, supporting
        multiple speakers in 112 languages.
      </p>
      <div className="md:flex flex-col mt-20 lg:grid lg:grid-cols-2 gap-6 items-center p-6 hidden ">
        {/* Left Column: Text Section */}
        <div className="text-center ">
          <ul className="w-[95%]">
            {Object.keys(content).map((speaker, index) => (
              <li key={index} className="">
                <button
                  onClick={() => setActive(speaker)}
                  className={`my-4 text-[40px]   ${
                    active === speaker
                      ? "text-[#ff4438] font-extrabold"
                      : "text-gray-700"
                  }`}
                >
                  {content[speaker as keyof typeof content].text}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Content Section */}
        <div className="relative flex justify-center items-center h-72 w-full">
          <div className="">
            {content[active as keyof typeof content].media.type === "image" ? (
              <img
                src={content[active as keyof typeof content].media.src}
                alt="Media Content"
                className="h-full w-auto max-w-md object-contain rounded-xl"
              />
            ) : (
              <video
                src={content[active as keyof typeof content].media.src}
                autoPlay
                className="h-full w-auto max-w-md object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-center">
        <div className="text-center ">
          <ul className="w-[95%]">
            {Object.keys(content).map((speaker, index) => (
              <li key={index} className="">
                <button className={`my-4 text-[40px] text-gray-700   `}>
                  {content[speaker as keyof typeof content].text}
                </button>

                <div className="">
                  {content[speaker as keyof typeof content].media.type ===
                  "image" ? (
                    <img
                      src={content[speaker as keyof typeof content].media.src}
                      alt="Media Content"
                      className="h-full w-auto  object-contain rounded-xl"
                    />
                  ) : (
                    <video
                      src={content[speaker as keyof typeof content].media.src}
                      autoPlay
                      className="h-full w-auto  object-contain rounded-xl"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
