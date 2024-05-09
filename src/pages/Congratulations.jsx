import { MdOutlineDone } from "react-icons/md";
import logo from '../assets/logo.svg';
import { useEffect, useState } from "react";

function Congratulations() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {

    const setTimeOut = setInterval(() => {
      setCountdown(countdown - 1)
    }, 1000)


    setTimeout(function () {
      window.location.replace('/');
    }, 5000);

    return () => clearTimeout(setTimeOut);
  }, [countdown])


  return (
    <div className={` w-full p-4 flex flex-col gap-4 items-center justify-center `}>
      <nav className="w-full  flex  px-4 ">
        <img className="h-10" src={logo} alt="Brand Logo" />
      </nav>

      <div className=" w-2/5 flex flex-col items-center mt-12 py-8 gap-12 ">

        <div className="bg-green-400 p-2 rounded-full "><MdOutlineDone className="text-white size-12" /></div>

        <div className="flex flex-col items-center gap-2">
          <p className=" font-hand-written text-green-600 text-4xl ">Success Submitted</p>
          <p className=" text-font-black text-6xl font-semibold text-center ">Congratulations</p>
          <p className=" text-[#727272] text-2xl font-medium text-center mt-3 ">Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
        </div>
      </div>

      <div className=" w-1/3 mt-24 ">
        <p className="text-[#727272] text-lg text-center">Redirecting you to Homepage in <span className=" text-font-black font-medium">{countdown} Seconds</span></p>
      </div>
    </div>
  )
}

export default Congratulations