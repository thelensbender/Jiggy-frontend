import React from 'react'
import { Zap, FileCodeCorner, Dumbbell, EyeOff } from 'lucide-react';
import Button from "../src/components Button.jsx";
import HabitInfo from "../src/components/Habit/HabitInfo.jsx";



// REMEMBER THAT THE HABIT DATA ISNT HERE, IT MIGHT NOT WORK UNTIL YOU CONNECT IT WITH THE DATA
const habit = {};
export default function Dashboard() {
   return (
      // Main div
      <div className="flex items-center justify-center h-full">
         {/* Elements div */}
         <div className="flex flex-col items-center px-3 py-5 h-4/5 w-1/4">
            <div>
               <div className="text-4xl font-bold font-sans">Keep the streak alive🔥</div>
               <div className="text-[#746e7c] font-sans">Tuesday, April 21</div> {/* Date */}
            </div>

            <div className="w-30"><div className="w-full"></div></div> {/* Fire div. I want to add animation after */}

            <div className="flex justify-center items-center rounded-full h-18 w-18 bg-[#8B5CF6] mt-10 shadow-lg"><Zap color="white" size={40}></Zap></div> {/* Bolt div */}

            {/* Habits preview master div*/}
            <div className="w-full m-10">
               {/* Habit Preview Headers */}
               <div className="flex justify-between w-full">
                  <div className="text-lg text-[#494454] font-sans font-bold tracking-widest">YOUR HABITS</div>
                  <div className="text-[#5515bd] font-san">View All</div>
               </div>

               {/* Habits preview*/}
               <div className="flex flex-col gap-5 mt-5">
                  {habit.map((eachHabit) => {
                     const progress = Math.round((eachHabit.streak / eachHabit.goal.value) * 100);

                     // Each Habit
                     return (
                     <div key={eachHabit.id} className="flex items-center justify-between gap-5 rounded-lg bg-[#fffdff] p-5">
                        <HabitInfo habit={eachHabit}/> {/*  Icon and name component */}
                        <div>{progress}%</div>
                     </div>
                     )
                  })}
               </div>

               {/* Add habit button */}
               <Button />
            </div>
         </div>
      </div>
  )
}
