import { useState } from "react";

// Sample JSON data for accordion sections
const accordionData = [
  {
    heading: "Digital nomad",
    subheading: "1,000+ ideas and notes that travel light",
    image: "/images/accordion-1.jpg",
    content:
      "Your AI on-the-go is all you'll need. The power of AI at around the weight of a AA battery, the NotePin goes anywhere work takes you.",
  },
  {
    heading: "Real estate agent",
    subheading: "Convert conversations into closing deals",
    image: "/images/accordion-2.jpg",
    content:
      "The details are the difference between closing and not. Capture every word your client said so you can deliver exactly what they asked for.",
  },
  {
    heading: "Educator",
    subheading: "Educating better starts with better insights",
    image: "/images/accordion-3.jpg",
    content:
      "Record, recall, review so you can improve your training programs and provide post session transcripts.",
  },
  {
    heading: "Engineer",
    subheading: "Designed to keep you on track and on time",
    image: "/images/accordion-4.jpg",
    content:
      "You build, we'll handle your meetings. Even when there's no network, NotePin captures everything, so your project is on schedule.",
  },
  {
    heading: "Doctor",
    subheading: "Accurate summaries for healthier patients",
    image: "/images/accordion-5.jpg",
    content:
      "When it comes to health care, no detail can be missed. Capture every word with just one press. NotePin ensures better care and patient health.",
  },
  {
    heading: "Creative Worker",
    subheading: "Always ready to capture your next great idea",
    image: "/images/accordion-6.jpg",
    content:
      "We do your busy work so you can focus on creative work. AI powered summaries and insights means we took the mundane out of each job. ",
  },
];

export default function Accordion() {
  // Set default active index to 0 (first accordion is open by default)
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(accordionData[0].image);

  const handleAccordionClick = (index: any) => {
    if (activeIndex !== index) {
      setActiveIndex(index); // Open a new accordion
      setCurrentImage(accordionData[index].image);
    }
  };

  return (
    <>
      <h1 className="flex text-center justify-center items-center text-6xl mb-5">
        AI notetaker for all professionals
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 p-4 mx-4 ">
        {/* Left side - Image */}
        <div className="p-4 mt-4 flex justify-center items-center">
          <img
            src={currentImage}
            alt="Accordion Image"
            className="w-[85%] h-auto rounded-[6.25rem] shadow-md"
          />
        </div>

        {/* Right side - Accordion */}
        <div className="p-4">
          <div className="space-y-4 lg:w-[90%] mt-3">
            <div className="accordion">
              {accordionData.map((item, index) => (
                <div key={index}>
                  {/* Accordion Button */}
                  <button
                    onClick={() => handleAccordionClick(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex flex-row items-center font-semibold text-lg border-b ${
                      activeIndex === index
                        ? "border-transparent"
                        : "border-gray-300"
                    }`}
                  >
                    {item.heading}
                    <p
                      className={`ml-auto ${
                        activeIndex === index
                          ? "text-[#ff4438] text-4xl"
                          : "bg-[#ff4438] rounded-full text-white px-[6px]"
                      }`}
                    >
                      {activeIndex === index ? "-" : "+"}
                    </p>
                  </button>

                  {/* Accordion Content */}
                  {activeIndex === index && (
                    <div className="px-4 mt-2 border-b border-gray-300">
                      <p className="text-5xl ">{item.subheading}</p>
                      <p className="mt-4 text-[#282828] text-xl mb-4 ">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h1 className="flex text-center justify-center items-center text-5xl mb-5">
        And more professional use cases
      </h1>
      <h1 className="flex text-center justify-center items-center text-5xl mb-5">
        ......{" "}
      </h1>
    </>
  );
}
