// import {HERO_CONTENT} from "../constants";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/new.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { inView, motion } from "framer-motion";


//motion function
const container = (delay) =>({
  // inView: {x: 0 ,opacity:1}, ddint work
  hidden: { x : -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay:  delay},
  },
});



const Hero = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap justify-between ">
          <div
            className="w-full
             lg:w-1/2"
          >
            <div className="flex  flex-col lg:items-start">
              {/*items-cdenter been remove add*/}
              <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 font-thin font-sans text-center text-[55px] tracking-tight lg:mb-6 md:text-6xl">
                Ajay Mourya
              </motion.h1>

              <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r text-center from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent">
                Mern Stack Developer
              </motion.span>

              <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2  max-w-lg text-md md:text-[16px] font-light   tracking-tight">
                {HERO_CONTENT}
              </motion.p>
              <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="pb-8 mt-2 cursor-pointer flex items-center justify-center gap-6 text-2xl">
                <FaGithub />
                <FaInstagram />
                <FaLinkedin />
              </motion.div>
            </div>
          </div>
          {/* Image Need to UPload */}
          <div className="px-12 lg:px-8 ">
            <div className=" flex justify-center">
              <motion.img
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:1,delay:1.2}}
                className=" max-w-80 rounded-lg"
                src={profilePic}
                alt="Ajay Mourya"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
