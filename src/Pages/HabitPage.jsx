import {useContext} from "react";
import UserContext from "../UserContext";
import {useNavigate } from "react-router-dom";


import { BadgePlus } from "lucide-react"

import HabitCard from "../components/Habit/HabitCard"
import Button from "../components/UI/Button"
// REMEMBER THAT THE HABIT DATA ISNT HERE, IT MIGHT NOT WORK UNTIL YOU CONNECT IT WITH THE DATA
export default function AllHabit() {
   const navigate = useNavigate();

   const { habits, setForm, formFormat } = useContext(UserContext);
   const buttonInfo ={
      text: "Create a new Habit",
      icon: BadgePlus,
      backgroundColor: "#8B5CF6",
      textColour: "white"
   }
   return (
      // Main div
      <div className="flex items-center mb-15 justify-center">
         {/* Elements div */}
         <div className="flex flex-col w-1/4">
            {/* All Habits master div*/}
            <div className="w-full">
               {/* Habit Preview Headers */}

               <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col justify-center ">
                     <div className="text-2xl text-[#494454] font-sans font-bold tracking-widest">ALL HABITS</div>
                     <div className="text-[#5515bd] font-san">Stay Focused, Stay Kinetic!</div>
                  </div>
                  {/* Fire div. I want to add animation after. */}
                  <div className="flex justify-center items-center rounded-full h-14 w-14 bg-[#8B5CF6] shadow-lg">
                     <div className="text-2xl">🔥</div>
                  </div>
               </div>

               {/* Habits preview*/}
               <div className="flex flex-col gap-5 mt-8">
                  {habits.map((eachHabit, id) => {
                     // Each Habit
                     return (
                        <HabitCard key={id} habit={eachHabit}/>
                     )
                  })}
               </div>

               {/* Add habit button */}
               <div className="w-full mt-8"><Button onClick={()=>{
                  setForm(formFormat)
                  navigate("/define-habit");
                  }} buttonInfo = {buttonInfo}/></div>
            </div>
         </div>
      </div>
   )
}
