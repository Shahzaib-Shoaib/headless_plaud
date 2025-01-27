import { useState } from "react";

export default function Sec3() {
  const [isModalOpen1, setModalOpen1] = useState(false);

  const handleModalToggle1 = () => {
    setModalOpen1(!isModalOpen1);
  };

  const [isModalOpen2, setModalOpen2] = useState(false);

  const handleModalToggle2 = () => {
    setModalOpen2(!isModalOpen2);
  };
  function PlusIcon({ className = "w-6 h-6" }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    );
  }
  return (
    <div>
      <div className=" lg:rounded-[10rem] bg-black text-white my-14 ">
        <h1 className="flex text-center items-center justify-center text-white lg:text-8xl lg:mx-52 lg:py-28 text-5xl py-24  lg:px-0 px-10">
          Nothing that matters is missed
        </h1>

        {/* Mobile Div */}

        <div className="block lg:hidden px-10">
          <div className="flex items-center justify-center">
            <img
              src="/images/sec3.png"
              alt=""
              className=" object-contain w-[30%]"
            />
          </div>
          <p className="text-4xl flex items-center justify-center text-center mt-10">
            Always ready to capture everything
          </p>
          <p className="font-light text-[22px] leading-6 my-5 text-center">
            The best ideas can come when you're least expecting them. NotePin is
            always with you to ensure none of them slip away.
          </p>
          <p className="text-4xl flex items-center justify-center text-center mt-10">
            Press, record, recall
          </p>
          <p className="font-light text-[22px] leading-6 my-5 text-center">
            Simply press and capture every important detail, effortlessly.
          </p>
        </div>

        <div className="lg:block hidden">
          <section className="bg-black text-white min-h-screen relative px-20 py-12 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-3  ">
              {/* Left Column */}
              <div className="mt-[11rem]">
                <div className="grid-cols-[70%_30%] flex">
                  <div className="">
                    <h2 className=" font-light  text-[40px] leading-10 mb-4">
                      Always ready to capture everything
                    </h2>

                    <p className=" font-light text-[22px] leading-5">
                      The best ideas can come when you&apos;re least expecting
                      them. NotePin is always with you to ensure none of them
                      slip away.
                    </p>
                  </div>

                  <div className="" onClick={handleModalToggle1}>
                    <div className="w-12 h-12 border border-white hover:border-[#ff4438] rounded-full flex items-center justify-center">
                      <PlusIcon className="w-6 h-6 text-white hover:text-[#ff4438]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/sec3.png"
                    alt=""
                    className=" object-contain w-[60%]"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="mt-[11rem]">
                <div className=" grid-cols-[30%_70%] flex">
                  <div className=" mr-5" onClick={handleModalToggle2}>
                    <div className="w-12 h-12 border border-white hover:border-[#ff4438] rounded-full flex items-center justify-center">
                      <PlusIcon className="w-6 h-6 text-white hover:text-[#ff4438]" />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-light text-[40px] leading-10 mb-4">
                      Press, record, recall
                    </h2>
                    <p className=" font-light text-[22px] leading-5 ">
                      Simply press and capture every important detail,
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <h1 className="flex text-center items-center justify-center text-white lg:text-8xl lg:py-28 text-5xl py-24">
          Always by your side{" "}
        </h1>
      </div>

      {isModalOpen1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-lg w-[90%] max-w-[60rem] ">
            <div className="grid grid-cols-2">
              <div className="bg-[#ecedf2] ">
                <button
                  className="  text-black hover:text-[#ff4438] mt-16 ml-6 "
                  onClick={handleModalToggle1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.5}
                    stroke="currentColor"
                    className="size-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <div className=" ml-10 mr-20 mt-16">
                  <h1 className=" text-5xl">
                    Always ready to capture everything
                  </h1>
                  <p className="text-2xl mt-10 leading-6">
                    The best ideas can come when you're least expecting them.
                    NotePin is always with you to ensure none of them slip away.
                  </p>
                </div>
              </div>
              <div className="">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ display: "block", margin: "0 auto" }}
                >
                  <source src="/videos/plus_one.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-lg w-[90%] max-w-[60rem] ">
            {/* Close Button */}

            {/* YouTube Video */}
            <div className="grid grid-cols-2">
              <div className="bg-[#ecedf2] ">
                <button
                  className="  text-black hover:text-[#ff4438] mt-16 ml-6 "
                  onClick={handleModalToggle2}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.5}
                    stroke="currentColor"
                    className="size-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <div className=" ml-10 mr-20 mt-16">
                  <h1 className=" text-5xl">Press, record, recall</h1>
                  <p className="text-2xl mt-10 leading-6">
                    Simply press and capture every important detail,
                    effortlessly.
                  </p>
                </div>
              </div>
              <div className="">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ display: "block", margin: "0 auto" }}
                >
                  <source src="/videos/plus_two.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
