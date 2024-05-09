

function Footer() {
  return (
    <footer className=" h-20 bg-footer rounded-3xl shadow m-4 ">
      <div className="w-full h-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between text-font-black text-base">
        <span className=" text-center ml-8">© Talup 2023. All rights reserved
        </span>
        <ul className="flex flex-wrap items-center mt-3  font-medium  sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Terms & Conditions</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>

        </ul>
      </div>
    </footer>

  )
}

export default Footer