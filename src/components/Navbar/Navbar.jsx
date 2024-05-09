
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <header className=' w-full  fixed z-10'>
      <nav className="bg-white border-gray-300 border rounded-full m-4">
        <div className="max-w-screen-2xl px-2">
          <div className="flex justify-between items-center h-20 ">
            {/* Brand Logo */}
            <div className="flex-shrink-0 ml-10 my-3">
              <img className="h-7" src={logo} alt="Brand Logo" />
            </div>
            {/* Buttons */}
            <div className="flex items-center">
              {/* Get Projects Button */}
              <Link to="register" className="mr-4 hover:bg-button-hover-gray text-[#1C1C1C] font-semibold py-5 px-8 rounded-full border">
                Get Projects
              </Link>
              {/* Onboard Talent Button */}
              <Link to="#" className="bg-button-black hover:bg-button-hover-black text-white font-semibold py-5 px-8 rounded-full">
                Onboard Talent
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
