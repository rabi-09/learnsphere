import { TypewriterEffectSmooth } from "./typewriter-effect";


export function HeroText() {
  const words = [
  { text: "Empower " },
  { text: "your " },
  { text: "learning " },
  { text: "journey " },
  { text: "with " },
  { text: "LearnSphere", className: "text-blue-600 dark:text-blue-300 font-bold" },
];


  
  return (
    <div className="blur-box flex flex-col items-center justify-center h-[40rem] z-50">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words}/>
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Explore Courses
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}
