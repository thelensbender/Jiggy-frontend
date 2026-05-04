import { Check, Dumbbell} from 'lucide-react';
import ElementHeader from "../components/UI/ElementHeader.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";

export default function LogEntry() {

   const ElementInfo = {
      Icon: Dumbbell,
      Header : "Daily Strength",
      Info: "Log your progress for today"
   }

   const inputInfos = [{
      label: "short",
      placeholder: "0",
      type: "number",
      name: "dayDuration",
      heading: "DURATION (MINUTES)",
      options: [
         { label: "", value: "" },
         { label: "", value: "" }
      ]
   },
   {
      label: "short",
      placeholder: "How did it go?",
      type: "text",
      name: "dayReflection",
      heading: "REFLECTION",
      options: [
         { label: "", value: "" },
         { label: "", value: "" }
      ]
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
         icon: "",
         backgroundColor: "white",
         textColour: "#746e7c"

      }]
   return (
      // Main div
      <div className="flex justify-center pb-20">
         {/* Elements div */}
         <div className="flex flex-col items-center w-1/4">
            {/* Element Header */}
            <ElementHeader elementInfo={ElementInfo}/>

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
               })}
            </div>
         </div>
      </div>
  );
}