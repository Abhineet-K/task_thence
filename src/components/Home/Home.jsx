import Intro from "./Intro"
import QnA from "./QnA"



function Home() {
  return (
    <div className="px-4 flex flex-col gap-16 mt-32">
      <Intro />
      <QnA />
    </div>
  )
}

export default Home