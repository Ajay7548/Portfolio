

import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center text-4xl">Aj.{/*remove text-4xl*/}
        {/* <img className="mx-2  w-16 h-16 rounded-full" src={logo} alt="logo" /> */}
      </div>
      <div className="m-4 px-4 cursor-pointer flex items-center justify-center gap-4 text-xl">
        <FaGithub/>
        <FaInstagram/>
        <FaLinkedin/>
        <button className="border-2  text-sm md:text-lg p-3 rounded-md ">Lets Connect</button>
      </div>

    </nav>
  )
}

export default Navbar
