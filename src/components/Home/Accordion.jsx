import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, answer, bottomBorder }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={`py-4 ${bottomBorder ? 'border-b-2 border-bottom-gray' : ''}`}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full mb-2 font-semibold"
      >
        <span className="text-lg w-4/5 text-start">{title}</span>

        <svg
          className=" shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-font-gray-Ans text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden text-base">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;