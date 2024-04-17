import { HERO_CONTENT } from "../constants";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Johnny Ramsay
            </h1>
            <span className="bg-gradient-to-r from-blue-900 via-slate-300 to bg-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Junior React Developer
            </span>
            <p>{HERO_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
