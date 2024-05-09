import { Link } from "react-router-dom"
import logo from '../assets/logo.svg';
import { RxCross1 } from "react-icons/rx";
import { MdError } from "react-icons/md";
import { useEffect, useState } from 'react';
import Congratulations from "./Congratulations";


function Register() {

  const [values, setValues] = useState({
    username: '',
    email: '',
  })
  const [emailError, setEmailError] = useState(false)
  const [disable, setDisable] = useState(true);
  const [registered, setRegistered] = useState(false);


  // For email regex pattern
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  // For username and email checker 
  useEffect(() => {
    if (values.username.length === 0 || values.email.length === 0) {
      setDisable(true)
    } else if (values.username.length >= 1 || values.email.length >= 1) {
      setDisable(false)
    }
  }, [values.username, values.email])



  function handleInput(event) {
    const newValues = { ...values, [event.target.name]: event.target.value }
    setValues(newValues)
    setEmailError(false)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEmailError(!validateEmail(values.email))
    setDisable(true)
    if (validateEmail(values.email)) {
      setRegistered(true)
    }
  }

  console.log('emailerr: ', emailError);

  return (
    <div className="relative">
      <div className={` w-full p-4  flex flex-col gap-4 items-center justify-center ${registered ? 'hidden' : ''}`}>
        <nav className="w-full  flex justify-between px-4 ">
          <img className="h-10" src={logo} alt="Brand Logo" />
          <Link to="/"><RxCross1 className="size-12 border-2 p-3 hover:bg-green-200 hover:scale-110 transition-all duration-200 ease-in-out rounded-full " /></Link>
        </nav>

        <div className=" w-1/3 flex flex-col items-center ">
          <p className=" font-hand-written text-green-600 text-2xl ">Registration Form</p>
          <p className=" text-font-black text-5xl font-semibold text-center ">Start your success Journey here!</p>
        </div>

        <div className=" w-1/3 my-8  ">

          <form className=" flex flex-col items-center justify-evenly gap-8 px-3 my-8 w-full" onSubmit={handleSubmit}>


            <input className=' w-full rounded-full text-3xl py-5 px-8  bg-[#EFEFEF]' placeholder="Enter your name" name="username" onChange={handleInput} />

            <div className="w-full">
              <input className={`w-full rounded-full text-3xl py-5 px-8  bg-[#EFEFEF] ${emailError ? 'outline outline-red-400' : ''} `} placeholder="Enter your email" name="email" onChange={handleInput} />
              {emailError && (<div className={`w-full flex items-center gap-1 text-red-600 px-8  `}><MdError /><span >Enter a valid email address</span></div>)}
            </div>

            <button name='submit' className={` w-full rounded-full text-2xl py-5 text-white ${disable ? 'bg-[#C9C9C9]' : 'bg-font-black'} `} disabled={disable}>Submit</button>

          </form>
        </div>
      </div>
      {registered && (<Congratulations />)}
    </div>
  )
}

export default Register