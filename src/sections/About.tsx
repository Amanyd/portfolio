"use client";
import Image from "next/image"

export default function About(){
    
    return(
    <section id="about" className="scroll-smooth flex items-center pt-32 justify-center px-6">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div className="flex justify-center md:justify-between">
                <div className="relative w-56 h-56 md:w-87 md:h-87  rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <Image src="/Untitled.jpg" alt="TypeShyt" sizes="auto" className="object-cover" fill priority/>
                </div>
            </div>
            <div className="text-center  text-gray-200">
                <h2 className="text-4xl text-left font-bold mb-4">About Me !!
                    
                </h2>
                <p className=" text-gray-400 text-justify leading-relaxed mb-4 max-w-lg">
                    
                    I'm a passionate developer who enjoys building smooth,
                    minimal, and functional designs. I believe in creating
                    user experiences that are simple yet delightful, much like
                    this portfolio.
                </p>
                <p className="text-gray-400 text-justify leading-relaxed max-w-lg">
                    When I’m not coding, you’ll probably find me exploring new
                    tech, learning design principles, or sipping coffee while
                    planning my next project.
                </p>
            </div>
        </div>
    </section>
)
}