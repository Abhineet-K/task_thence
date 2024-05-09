import Accordion from "./Accordion"
import a from '../../assets/a.svg';



function QnA() {
  let FAQ = [
    {
      title: "Do you offer freelancers?",
      answer: "answer one",
    },
    {
      title: "What's the guarantee that I will be satisfied with the hired talent?",
      answer: "answer two",
    },
    {
      title: "Can I hire multiple talents at once?",
      answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      title: "Why should I not go to an agency directly?",
      answer: "answer three",
    },
    {
      title: "Who can help me pick a right skillset and duration for me?",
      answer: "answer four",
    },
  ]

  return (
    <div className="flex w-full bg-QnA p-16 rounded-5xl overflow-hidden">
      {/* For QnA Heading */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="font-hand-written text-3xl text-font-gray-QnA">{`What's on your mind`}</div>
          <div className="font-semibold text-6xl">Ask Questions</div>
        </div>
        {/* for a image */}
        <div className=" w-full h-full  relative">
          <img src={a} alt="" className="-left-20 -bottom-40 absolute scale-90" />
        </div>
      </div>

      {/* For All question and Answers */}
      <div className="flex-1 py-4">

        {FAQ.map((obj, index) => (
          <Accordion key={index}
            title={obj.title}
            answer={obj.answer}
            bottomBorder={index !== FAQ.length - 1 ? true : false}
          />
        ))}

      </div>
    </div>
  )
}

export default QnA