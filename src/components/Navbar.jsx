import logo from "../assets/johnnylogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-red-800 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <SiFrontendmentor />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
