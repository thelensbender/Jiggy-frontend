import { useState } from "react";
import ElementHeader from "./components/UI/ElementHeader";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import {Check, Bold} from 'lucide-react';


// Icons
import { NotebookPen } from 'lucide-react';



export default function App() {
   const ElementInfo = {
      Icon: NotebookPen ,
      Header : "Define Your Habit",
      Info: "Small steps lead to great changes."
   }
   const [elementInfo, setElementInfo] = useState(ElementInfo);

   const inputInfos = [{
      label: "short",
      placeholder: "e.g Read, Workout, No Fap",
      type: "text",
      heading: "Habit Name",
      options: [
         { label: "", value: "" },
         { label: "", value: "" }
      ]
   },
   {
      label: "long",
      placeholder: "Write a short note about this habit...",
      type: "text",
      heading: "Description (Optional)",
      options: [
         { label: "", value: "" },
         { label: "", value: "" }
      ]
   },
   {
      label: "",
      placeholder: "",
      type: "radio",
      heading: "Tracking Unit",
      options: [
         { label: "Days", value: "days" },
         { label: "Hours", value: "hours" }
      ]
   },
   {
      label: "",
      placeholder: "0",
      type: "number",
      heading: "Streak Goal (Optional)",
      options: [
         { label: "", value: "" },
         { label: "", value: "" }
      ]
   }]

   const buttonInfo = {
      text: "Create Habit",
      icon: Check,
      backgroundColor: "#8B5CF6",
      textColour: "white"
   }


   return (
      // Main div
      <div className="flex justify-center">
         {/* Elements div */}
         <div className="flex flex-col w-1/4">
            <ElementHeader elementInfo={elementInfo}/>
            <Input inputInfo={inputInfos}/>
            <div className="text-[#746e7c] font-sans mt-2">Set a goal if you want a target, or leave empty.<br/>Leaving goal empty means you're streaking <strong> till infinity.</strong></div>
            <div className="mt-5"><Button buttonInfo={buttonInfo}/></div>
         </div>

      </div>
  );
}