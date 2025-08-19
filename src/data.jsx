import React from 'react'
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiMongodb, SiVite, SiGithub, SiJson,  SiBootstrap,  SiMaterialui, SiStyledcomponents } from "react-icons/si";



const data = () => {

 const SKILLS = [
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" />, category: "Frontend" },
  { name: "Redux", icon: <SiRedux size={40} color="#764ABC" />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" />, category: "Backend" },
  { name: "Mongodb", icon: <SiMongodb size={40} color="#3C873A" />, category: "Backend" },
  { name: "Material UI", icon: <SiMaterialui size={40} color="#007FFF" />, category: "Frontend" },
  { name: "Styled Components", icon: <SiStyledcomponents size={40} color="#DB7093" />, category: "Frontend" },
  { name: "Sass", icon: <FaSass size={40} color="#CC6699" />, category: "Frontend" },
  { name: "HTML5", icon: <i className="devicon-html5-plain colored text-5xl"></i>, category: "Frontend" },
  { name: "CSS3", icon: <i className="devicon-css3-plain colored text-5xl"></i>, category: "Frontend" },
  { name: "Bootstrap", icon: <SiBootstrap size={40} color="#7952B3" />, category: "Frontend" },
  { name: "Vite", icon: <SiVite size={40} color="#646CFF" />, category: "Tools" },
  { name: "VSCode", icon: <i className="devicon-vscode-plain colored text-5xl"></i>, category: "Tools" },
  { name: "GitHub", icon: <SiGithub size={40} />, category: "Tools" },
  { name: "JSON", icon: <SiJson size={40} />, category: "Data" },
];

  return (
    <div>
      
    </div>
  )
}

export default data
