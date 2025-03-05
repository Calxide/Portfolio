import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoAngular } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";

import{motion} from "framer-motion";

const tech = () => {

  const variants = {
    hidden:{opacity:0, y:50}, 
    visible:{opacity:1, y:0}
   }
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 md:gap-16">
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="text-4xl font-light text-white md:text-6xl">Applications</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="text-4xl font-light text-white md:text-6xl">
          <BiLogoJava className="cursor-pointer text-[50px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[75px] md:text-[100px]"/>
      </motion.div>
      <motion.div variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="text-4xl font-light text-white md:text-6xl">
          <BiLogoAngular className="cursor-pointer text-[50px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[75px] md:text-[100px]"/>
      </motion.div>
      <motion.div variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="text-4xl font-light text-white md:text-6xl">
          
          <BiLogoMongodb className="cursor-pointer text-[50px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[75px] md:text-[100px]"/>
      </motion.div>
      <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="text-4xl font-light text-white md:text-6xl">
          <BiLogoFigma className="cursor-pointer text-[50px] text-pink-500 transition-all duration-300 hover:-translate-y-5 sm:text-[75px] md:text-[100px]"/>
      </motion.div>
      <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="text-4xl font-light text-white md:text-6xl">
          <BiLogoHtml5 className="cursor-pointer text-[50px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[75px] md:text-[100px]"/>
      </motion.div>

      <motion.div variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="text-4xl font-light text-white md:text-6xl">
          <BiLogoJavascript className="cursor-pointer text-[50px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[75px] md:text-[100px]"/>
      </motion.div>

      <motion.div variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="text-4xl font-light text-white md:text-6xl">

          <BiLogoGithub className="cursor-pointer text-[50px] text-indigo-500 transition-all duration-300 hover:-translate-y-5 sm:text-[75px] md:text-[100px]"/>
      </motion.div>

   </div>
  </div>
  )
}

export default tech