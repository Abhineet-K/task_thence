import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"


function App() {


  return (
    <>
      <div className=" font-mystyle flex flex-col gap-4 ">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
