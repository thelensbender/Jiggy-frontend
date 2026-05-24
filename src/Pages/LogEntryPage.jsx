import { useState } from "react";
import {useContext} from "react";
import UserContext from "../UserContext";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";

import { Check, Dumbbell} from 'lucide-react';
import ElementHeader from "../components/UI/ElementHeader.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import SkipHabitUI from "../components/Layout/SkipHabitConfirm.jsx";

export default function LogEntry() {
   const [showSkipConfirm, setShowSkipConfirm] = useState(false);

   const { habits, setHabits, form, notify, calculateStreak } = useContext(UserContext);
   const navigate = useNavigate();


   // To display the right habit details
   const { habitId } = useParams();

   // Find the exact habit usind the habitId
   const findHabit = habits.find(h => h.habitId === habitId);

   const ElementInfo = {
      icon: findHabit?.habitIcon,
      header : findHabit.habitName,
      info: "Log your progress for today",
      editable: {status: false, icon: ""}
   }

   const inputInfos = [{
      label: "short",
      placeholder: "0",
      type: "number",
      name: "duration",
      required: false,
      heading: "DURATION (MINUTES) (optional)",
      options: []
   },
   {
      label: "long",
      placeholder: "How did it go?",
      type: "text",
      name: "reflection",
      required: false,
      heading: "Reflection (optional)",
      options: []
   }]

   const week = ["M", "T", "W", "T", "F", "S", "S"];

   const buttonInfo = [
      {
         text: "Mark as Done",
         icon: Check,
         backgroundColor: "#8B5CF6",
         textColour: "white",
         onClick: ()=> {
                     setHabits((prev) => {
                        return prev.map((habit) => {
                           if(habit.habitId === habitId) {
                              const newentry = [
                                 ...habit.entries, habitLog
                              ]
                              return {...habit,
                                 entries: newentry,
                                 streak: calculateStreak(newentry)
                              }
                           }
                              return habit;
                        })
                     });
                     notify(`You are amazing!`, "success");
                     navigate("/habit");
                  }
      },
      {
         text: "Skip for today",
         icon: "",
         backgroundColor: "white",
         textColour: "#746e7c",
         onClick: () => {
            setShowSkipConfirm(true);
         }

      }
   ]

   const habitLog = {...form.entries}

   return (
      // Main div
      <>
         {showSkipConfirm && (
            <SkipHabitUI findHabit = {findHabit} setShowSkipConfirm = {setShowSkipConfirm} />
         )}
         <div className="flex justify-center pb-20">
            {/* Elements div */}
            <div className="flex flex-col items-center w-1/4">
               {/* Element Header */}
               <ElementHeader elementInfo={ElementInfo}/>

               {/* A week progress(Show from Monday to Sunday) */}
               <div className="flex w-full justify-between mt-10">
                  {week.map((day, i) =>{
                     return (
                        <div key={i} className="flex flex-col gap-1 items-center">
                           <div className="text-xs text-[#746e7c] font-sans">{day}</div>
                           <div className="flex justify-center items-center rounded-full h-8 w-8 bg-white border-2 border-[#8B5CF6]"><Check size={20} color="#8B5CF6"/></div>
                        </div>
                     )
                  })}
               </div>

               {/* Input field */}
               <div className="mt-10 w-full rounded-3xl bg-white px-10  pb-10">
                     <Input inputInfo={inputInfos}/>
               </div>

               {/* Buttons */}
               <div className="flex flex-col gap-3 w-full mt-10">
                  {buttonInfo.map((buttonInfo, i) =>{
                     return (
                        <Button
                        key={i}
                        onClick={buttonInfo.onClick}
                        buttonInfo={buttonInfo}/>
                     )
                  })}
               </div>
            </div>
         </div>
      </>
  );
}