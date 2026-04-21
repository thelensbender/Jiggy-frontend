import {ArrowRight} from "lucide-react";

// Welcome Screen for new User
export default function WelcomeScreen() {
  return (
   // Main div
   <div className="flex items-center justify-center h-screen">
      {/* Elements div */}
      <div className="flex-col justify-items-center px-3 py-5 h-4/5 w-1/4">

         {/* Circles Div */}
         <div className="flex justify-center">
            <div className="rounded-full h-18 w-18 bg-[#8B5CF6]"></div>
            <div className="flex self-start rounded-full h-4 w-4 bg-[#7e4f00]"></div>
         </div>

         {/* Text area */}
         <div className="mt-10">
            <div className="flex text-center font-sans font-bold text-3xl max-w-11/12  text-[#39264c]">What should we call you?</div>
            <div className="flex text-center justify-center font-thin text-[#8479c4] mt-4">We'll use this to personalize your dashboard.</div>
         </div>

         {/* Input field */}
         <div className="flex min-w-8/10 justify-center mt-10">
            <input placeholder="Your name" type="text" className="bg-[#f3e6fa] w-full h-12 px-5 rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-400"/>
         </div>

         {/* Let's go button */}
         <div className="flex justify-center items-center mt-10 min-w-8/10 h-12 rounded-full bg-[#8B5CF6] gap-2 ">
            <p className="text-base font-sans font-bold text-white">Let's go</p>
            <ArrowRight color="white" size={23} />
         </div>
      </div>
   </div>
  )
}
