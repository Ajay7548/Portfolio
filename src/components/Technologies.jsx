import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { motion } from "framer-motion";

const iconsVariant = (duration) => ({
  initial: { y: -13 },
  animate: {
    y: [13, -13],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
      whileInView={{y: 0 ,opacity:1}}
      initial={{y:-100, opacity:0}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{x: 0 ,opacity:1}}
      initial={{x:-100, opacity:0}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconsVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 ">
          <RiTailwindCssFill className="text-7xl text-blue-950" />
        </motion.div>

        <motion.div
          variants={iconsVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <DiJavascript className="text-7xl text-yellow-300" />
        </motion.div>

        <motion.div
          variants={iconsVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconsVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconsVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconsVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>

        <motion.div
          variants={iconsVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
