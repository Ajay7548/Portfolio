// import {HERO_CONTENT} from "../constants";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/MyImage.jpg";

const Hero = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full
             lg:w-1/2">
                <div className="flex flex-col  lg:items-start">{/*items-cdenter been remove add*/}
                    <h1 className="pb-2 font-thin text-[45px] tracking-tight lg:mb-6 md:text-6xl">Ajay Mourya</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent">Mern Stack Developer</span>
                    <p className="my-2 max-w-lg text-sm md:text-[16px] font-light tracking-tight">{HERO_CONTENT}</p>
                </div>
            </div>
            {/* Image Need to UPload */}
            {/* <div className="w-full ">
                <div className=" flex justify-center">
                    <img  className="h-48  w-70 rounded-lg" src={profilePic} alt="Ajay Mourya" />
                </div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
