"use client";

import {
  SiFramer,
  SiPrisma,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMongodb,
  SiVercel
} from "react-icons/si";

function Orbit({
  size,
  speedVar,
  children
}: {
  size: number;
  speedVar: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute ${speedVar} flex items-center justify-center`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="absolute"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 12) / 2}
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeDasharray="2 18"
          strokeLinecap="round"
        />
      </svg>
      <div className="w-full h-full relative flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-smooth relative pb-26 md:pb-0 pt-56  md:pt-32  flex items-center  justify-center px-6 overflow-hidden"
    >
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center  scale-125">


        <div className="absolute w-26 h-26  flex items-center justify-center text-gray-200 font-bold text-3xl ">
          Skills
        </div>

        
        <Orbit size={210} speedVar="animate-spin-slowest">
          <div className="absolute -top-2 animate-counter-spin-slowest">
            <SiFramer className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 animate-counter-spin-slowest">
            <SiPrisma className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute -bottom-2 animate-counter-spin-slowest">
            <SiJavascript className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 animate-counter-spin-slowest">
            <SiMongodb className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
        </Orbit>

        
        <Orbit size={300} speedVar="animate-spin-slower">
          <div className="absolute -top-2 animate-counter-spin-slower">
            <SiReact className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 animate-counter-spin-slower">
            <SiTailwindcss className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute -bottom-2 animate-counter-spin-slower">
            <SiTypescript className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 animate-counter-spin-slower">
            <SiVercel className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
        </Orbit>

        
        <Orbit size={390} speedVar="animate-spin-slow">
          <div className="absolute -top-2 animate-counter-spin-slow">
            <SiNextdotjs className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 animate-counter-spin-slow">
            <SiNodedotjs className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute -bottom-2 animate-counter-spin-slow">
            <SiGit className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 animate-counter-spin-slow">
            <SiGithub className="text-3xl text-gray-300 grayscale opacity-80" />
          </div>
        </Orbit>
      </div>
    </section>
  );
}
