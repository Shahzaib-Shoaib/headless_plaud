export default function Sec3() {
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
      <div className="rounded-3xl bg-black text-white my-14">
        <h1 className="flex text-center items-center justify-center text-white text-9xl mx-52 py-52">
          Nothing that matters is missed
        </h1>

        <div className="">
          <section className="bg-black text-white min-h-screen relative px-4 py-12 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="text-center lg:text-left space-y-4">
                <div className="grid-cols-[70%_30%] flex">
                  <div className="">
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">
                      Always ready to capture everything
                    </h2>

                    <p className="text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                      The best ideas can come when you&apos;re least expecting
                      them. NotePin is always with you to ensure none of them
                      slip away.
                    </p>
                  </div>

                  <div className="hidden lg:block ">
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                      <PlusIcon className="w-6 h-6 text-white" />
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
                    className=" object-contain w-[80%]"
                  />
                  {/* <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5KkMOEd6I0in9IVJiQ61P28o7IbtAR.png"
                    alt="NotePin Device"
                    fill
                    className="object-contain"
                    priority
                  /> */}
                </div>
                {/* <button className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-8 py-3 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
                  Order Now
                </button> */}
              </div>

              {/* Right Column */}
              <div className="text-center lg:text-left space-y-4">
                <div className=" grid-cols-[30%_70%] flex">
                  <div className="hidden lg:block">
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                      <PlusIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">
                      Press, record, recall
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                      Simply press and capture every important detail,
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <h1 className="flex text-center items-center justify-center text-white text-9xl  py-52">
          Always by your side{" "}
        </h1>
      </div>
    </div>
  );
}
