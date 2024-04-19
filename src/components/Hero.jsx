import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <h1 className="pb-16 text-center sm:text-left text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Johnny Ramsay
            </h1>
            <span className="bg-gradient-to-r from-blue-900 via-slate-300 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Junior React Developer
            </span>
            <p className="my-2 max-w-xl py-6 lg:text-left text-center font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Johnny Ramsay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
