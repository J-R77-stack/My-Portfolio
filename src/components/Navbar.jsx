import logo from "../assets/johnnylogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 " src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/johnny-ramsay-developer/"
          target="_blank"
          rel="noopener"
          aria-label="Github">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/J-R77-stack"
          target="_blank"
          rel="noopener"
          aria-label="Github">
          <FaGithub />
        </a>
        <a
          href="https://www.frontendmentor.io/talent-profile"
          target="_blank"
          rel="noopener"
          aria-label="Github">
          <SiFrontendmentor />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
