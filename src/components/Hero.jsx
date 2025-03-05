
import face from "/public/face.jpeg"
import {motion} from "framer-motion";
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white"> 
        <motion.div
          initial={{y:-50, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:0.8, delay:0.2}}
        >

            <img src={face} alt="" className="w-[100px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-4 hover:scale-100 hover:shadow-2xl hover:shadow-indigo-600 md:w-[275px]"/>
        </motion.div>
        <motion.div 
        initial={{y:50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
      <h1 className = "bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-4xl font-light md:text-6xl"> Kathy Cao </h1>

          <h3 className = "bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-1xl font-light md:text-2xl"> Software Developer</h3>
          <p classname="md:text-base text-pretty text-sm text-gray-400">Hey there! I'm Kathy, a software developer studying at Monash University, graduating at the end of 2025.
          </p><p classname="md:text-base text-pretty text-sm text-gray-400">
            Explore my portfolio to check out the languages I code in and the projects I've built so far. As a quick learner with a passion in problem solving, I am always eager to expand my skill set and take on new challenges.
          </p> <p classname="md:text-base text-pretty text-sm text-gray-400">
            Feel free to reach out for more information! 
          </p>

        </motion.div>

        </div>
        </div>
  )
}

export default Hero