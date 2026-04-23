import { useState } from "react";
import { ChartColumnIncreasing, Check,  FileCodeCorner, Dumbbell, EyeOff, Plus} from 'lucide-react';
import ElementHeader from "./components/UI/ElementHeader.jsx";
import Input from "./components/UI/Input.jsx";
import Button from "./components/UI/Button.jsx";




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

   const ElementInfo = {
      Icon: Dumbbell,
      Header : "Daily Strength",
      Info: "Log your progress for today"
   }
   const [elementInfo, setElementInfo] = useState(ElementInfo);

   const inputInfos = [{
      placeholder: "0",
      type: "number",
      heading: "Duration (Minutes)"
   },
   {
      placeholder: "How did it go?",
      type: "text",
      heading: "Reflection"
   }]

   const week = ["M", "T", "W", "T", "F", "S", "S"];

   const buttonInfo = [
      {
         text: "Mark as Done",
         icon: Check,
         backgroundColor: "#8B5CF6",
         textColour: "white"
      },
      {
         text: "Skip for today",
         icon: Check,
         backgroundColor: "white",
         textColour: "#746e7c"

      }]
   return (
      // Main div
      <div className="flex items-center justify-center h-full">
         {/* Elements div */}
         <div className="flex flex-col items-center w-1/4">
            {/* Element Header */}
            <ElementHeader elementInfo={elementInfo}/>

            {/* A week progress(Show from Monday to Sunday) */}
            <div className="flex w-full justify-between mt-10">
               {week.map((day) =>{
                  return (
                     <div className="flex flex-col gap-1 items-center">
                        <div className="text-xs text-[#746e7c] font-sans">{day}</div>
                        <div className="flex justify-center items-center rounded-full h-8 w-8 bg-white border-2 border-[#8B5CF6]"><Check size={20} color="#8B5CF6"/></div>
                     </div>
                  )
               })}
            </div>

            {/* Input field */}
            <div className="w-full">
               {inputInfos.map((inputInfo) =>{
                  return (
                     <Input inputInfo={inputInfo}/>
                  )
               })}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full mt-10">
               {buttonInfo.map((buttonInfo) =>{
                  return (
                        <Button buttonInfo={buttonInfo}/>
                  )
               })};
            </div>
         </div>
      </div>
  );
}