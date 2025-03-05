import image1 from"/public/1.png"
import image2 from"/public/2.png"
import image3 from"/public/3.png"

import {motion} from "framer-motion"

const projectsData = [
  {
    image: image1,
    title: "Delivery Service (fullstack/ GitHub Link)",
    description: " A full-stack delivery service website built with Angular and MongoDB for managing drivers, packages, and orders. I developed APIs for creating, retrieving, and deleting data, improving user experience and admin efficiency. This project strengthened my skills in full-stack development, API integration, and data management.",
    technologies: ["Angular","MongoDB"],
    link: "https://github.com/Calxide/DeliveryService"
  },
  {
    image: image2,
    title: "Northcote Fish and Chip redesign (front-end)",
    description: " A front-end redesign of the Northcote Fish and Chips website, focusing on enhancing the user experience and modernising the site's design. The project involved creating a clean, responsive layout that adapts seamlessly across devices, improving navigation and visual appeal. While this project only covers the front-end aspect,the project demonstrates my ability to transform a traditional website into a more modern and interactive space.",
    technologies: ["HTML","CSS", "JavaScript"],
    link: "https://northcotefishandchips.netlify.app"
  },
  {
    image: image3,
    title: "Text Base Elden Ring (GitHub Link)",
    description: "An immersive text-based adventure inspired by Elden Ring. Navigate a world of danger and mystery where your choices shape the story. Face powerful foes, uncover hidden lore, and carve your own path through this interactive game. While the full game requires a separate server engine (not included due to copyright restrictions), my code is available to explore on GitHub, showcasing my development work on the project, which was completed as part of a collaborative team effort.",
    technologies: ["Java"],
    link: "https://gitfront.io/r/calxide/PSGAiDtCRJbU/TextBaseGame/"
  }
]

const ScrollReveal = ({children}) => {
  return ( 
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    > 
      {children}
    </motion.div>)
}
const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24"> 
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-[2000px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto cursor-pointer rounded-2xl transition-all duration-300 hover:scale-110"
          />
        </a>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="text-xl font-semibold">{project.title}</div>
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-blue-500 rounded-full py-2 px-5 cursor-pointer transition-all duration-300 opacity-85 hover:bg-blue-600"
                >
                  Link
                </a>
              )}
            </div>
          <p> {project.description} </p>
        </div>
          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech,index)=> (
              <span key={index} className="rounded-1g bg-black p-3">
                {tech }
                </span>
              ))
            }
          </div>
      </div>
    </div> </ScrollReveal>
  )
}

const Project = () => {
  return (
    <div id="projects" className ="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">

  <ScrollReveal>
    
      <h1 className="text-4xl font-light text-white md:text-6xl"> My Projects</h1> </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
      {
        projectsData.map((project,index) =>(
          <ProjectCard key={index} project={project}/>
        ))
      }

      </div>
    </div>   
  )
}


export default Project