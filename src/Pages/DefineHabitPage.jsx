import {useContext} from "react";
import UserContext from "../UserContext";

import { FileCodeCorner } from "lucide-react";

import ElementHeader from "../components/UI/ElementHeader";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import {useNavigate } from "react-router-dom";



// Icons
import {BadgePlus, NotebookPen, ArrowLeft } from 'lucide-react';



export default function DefineHabit() {
   const navigate = useNavigate();

   const { form, setHabits, habits, defaultHabits, notify } = useContext(UserContext);
   // For the element heading
   const elementInfo = {
      icon: "NotebookPen" ,
      header : "Define Your Habit",
      info: "Small steps lead to great changes.",
      editable: {status: false, icon: ""}
   }

   // For the input
   const inputInfos = [{
      label: "short",
      name: "habitName",
      placeholder: "e.g Read, Workout, No Fap",
      type: "text",
      heading: "Habit Name",
      required: true,
      options: [
         { label: "", value: "" }
      ]
   },
   {
      label: "long",
      name: "habitDescription",
      placeholder: "Write a short note about this habit...",
      type: "text",
      heading: "Description (Optional)",
      options: [
         { label: "", value: "" }
      ]
   },
   {
      label: "short",
      placeholder: "",
      name: "habitUnit",
      type: "radio",
      heading: "Tracking Unit",
      required: true,
      options: [
         { label: "Days", value: "days" },
         { label: "Hours", value: "hours" }
      ]
   },
   {
      label: "short",
      placeholder: "0",
      type: "number",
      name: "habitGoal",
      heading: "Streak Goal (Optional)",
      options: [
         { label: "", value: "" }
      ]
   }]

   // For the button
   const buttonInfo = {
      text: "Create Habit",
      icon: BadgePlus ,
      backgroundColor: "#8B5CF6",
      textColour: "white"
   }


   return (
      // Main div
      <div className="flex justify-center ">
         {/* Elements div */}

         <div className="flex flex-col mb-13">
            <ElementHeader elementInfo={elementInfo}/>
            <Input inputInfo={inputInfos} form = {form} />
            <div className="text-[#746e7c] font-sans mt-2 text-sm md:text-base">Set a goal if you want a <strong>target</strong>, or leave empty.<br/>Leaving goal empty means you're streaking <strong> till infinity.</strong></div>
            <div className="flex justify-center mt-5"><Button onClick={()=>{
               if (form.habitData.habitName && form.habitData.habitUnit) {
                  // An object to temporarily store the new habit
                  const newHabit = {
                     ...form.habitData,
                     entries: [],
                     habitId: crypto.randomUUID(),
                     habitIcon: "FileCodeCorner",
                     habitIconColor: "#5210bc",
                     divBackground: "#e9ddff",
                     streak: 0
                  };
                  // Loops through the habit array to check if habit exists to avoid duplication
                  for(let i = 0; i < habits.length; i++){
                     if((habits[i]?.habitName === newHabit.habitName)) {
                        notify("Habit already exists!", "error");
                        return;
                     }
                  };
                  // Add the new habit object to the habit array
                  setHabits((prevHabit => {
                     if(habits === defaultHabits) {
                        return[newHabit];
                     }
                     return [...prevHabit, newHabit];
                  }));
                  // Pop up notification and move to the next page
                  notify("Habit created", "success");
                  navigate("/habit");
               } else {
                  notify("Fill up the required fields!", "error");
                  // if(form.habitData.habitName)
               };
               }} buttonInfo={buttonInfo}/>
            </div>
         </div>
      </div>
  );
}