

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  
  {
    title: "zHN Browser extension",
    description: "A chrome extension that summarizes your weekly saved bookmarks and sends it to your email, along with an AI generated conversational audio podcast.",
    image: "/project2.png",
    live: "#projects",
    github: "https://github.com/Amanyd/aipodcast",
    tech: ["Express", "React", "Node.js"],
  },
  {
    title: "AI personal logbook",
    description: "A personal logbook where user can post their daily life and get AI generated insights to improve their life, embedded with live AI chatbot to have someone to talk to.",
    image: "/project3.png",
    live: "https://my-core-qadj.vercel.app/",
    github: "https://github.com/Amanyd/myCore",
    tech: ["MongoDB", "Next.js", "Cloudinary"],
  },
  {
    title: "Modern SaaS landing page",
    description: "A modern SaaS landing page built for ADmyBRAND.com with Next.js and Tailwind CSS enhanced by Framer Motion with 60fps smooth animations.",
    image: "/project1.png",
    live: "https://admybrand-dusky.vercel.app/",
    github: "https://github.com/Amanyd/admybrand",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "E-Commerce",
    description: "The portfolio website you are viewing right now, built with next.js and framer motion. (Had to add this for the ease of grid :D)",
    image: "/project4.png",
    live: "https://shopeii.netlify.app/",
    github: "https://github.com/Amanyd/portfolio",
    tech: ["Next.js", "Framer-Motion", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-smooth pb-20 pt-32 px-6 flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-left text-gray-200 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-md border p-4 border-white/10 rounded-xl overflow-hidden shadow-lg"
            >
              
              <div className="relative w-full border filter grayscale border-white/5 rounded-lg h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="auto"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg z-10" />
              </div>

              
              <div className="p-5 z-20 text-gray-200 relative">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                
                <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-300">
                  {project.tech.map((techItem, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 px-2 py-1 rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 text-sm bg-white/10 hover:bg-white/20 transition px-3 py-1 rounded-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-sm bg-white/10 hover:bg-white/20 transition px-3 py-1 rounded-md"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 py-4">PS: My projects are not in grayscale, its just the filter to match my portfolio theme. Not all XD</p>
      </div>
    </section>
  );
}
