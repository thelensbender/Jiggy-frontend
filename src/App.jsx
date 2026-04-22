import { useState } from "react";
import { Zap, FileCodeCorner, Dumbbell, EyeOff } from 'lucide-react';


export default function App() {
   // defaultMetrics is a variable of dummy values
   const defaultHabits = [{
      id: "metric-1",
      name: "Coding",
      unit: "Days",
      icon: FileCodeCorner,
      iconColor: "#5210bc",
      divBackground: "#e9ddff",
      streak: 5,
      goal: {exist: true, value: 30},
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: true}
      ]
   }, {
      id: "metric-2",
      name: "Exercise",
      unit: "Days",
      icon: Dumbbell,
      iconColor: "#845403",
      divBackground: "#ffddb7",
      streak: 13,
      goal: {exist: false, value: 30},
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: true}
      ]
   }, {
      id: "metric-3",
      name: "No Fap",
      unit: "Days",
      icon: EyeOff,
      iconColor: "#004d46",
      divBackground: "#a1f1e5",
      streak: 0,
      goal: {exist: false, value: 30},
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: false}
      ]
   }]
   const [habit, setMetrics] = useState(defaultHabits);


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

            <div className="flex justify-center items-center rounded-full h-18 w-18 bg-[#8B5CF6] mt-10"><Zap color="white" size={40}></Zap></div> {/* Bolt div */}

            {/* Habits preview master div*/}
            <div className="w-full m-10">
               {/* Habit Preview Headers */}
               <div className="flex justify-between w-full">
                  <div className="text-lg text-[#494454] font-sans font-bold tracking-wider">YOUR HABITS</div>
                  <div className="text-[#5515bd] font-san">View All</div>
               </div>

               {/* Habits preview*/}
               <div className="flex flex-col gap-5 mt-5">
                 {habit.map((eachHabit) => {
                    const Icon = eachHabit.icon;
                    const progress = Math.round((eachHabit.streak / eachHabit.goal.value) * 100);

                    // Each Habit
                    return (
                     <div className="flex gap-5 rounded-lg bg-[#fffdff] p-5">
                        <div style={{ backgroundColor: eachHabit.divBackground }} className="flex justify-center items-center rounded-full h-13 w-13"><Icon color={eachHabit.iconColor} size={20}></Icon></div>
                        <div>
                           <div className="text-[#1d1a23] font-bold">{eachHabit.name}</div>
                           <div className="text-[#717171]">{eachHabit.streak} {eachHabit.unit}</div>
                        </div>
                        <div>{progress}%</div>
                     </div>
                    )
                 })}
               </div>
            </div>
         </div>
      </div>
  );
}