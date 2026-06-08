import {useContext} from "react";
import UserContext from "../Context/UserContext";
import {useNavigate } from "react-router-dom";


import { FileCodeCorner, Dumbbell, EyeOff, Rocket, Plus} from "lucide-react";
import Button from "../components/UI/Button";

export default function FirstStreak() {
   const navigate = useNavigate();
   const { setForm, formFormat} = useContext(UserContext);
   // Habit Suggestion for New user
   const quickStarts = [
      {habitName: "Coding", habitUnit: "days", habitIcon: FileCodeCorner, habitGoal: {exist: true, value: 30}},
      {habitName: "Exercise", habitUnit: "days", habitIcon: Dumbbell, habitGoal: {exist: true, value: 30}},
      {habitName: "No Fap", habitUnit: "days", habitIcon: EyeOff, habitGoal: {exist: false, value: null}}]

   const buttonInfo = {
      text: "Add new Habit",
      icon: Plus,
      backgroundColor: "#8B5CF6",
      textColour: "white"
   }

   return (
      // Main div
      <div className="flex justify-center">
         {/* Elements div */}
         <div className="flex flex-col justify-items-center">

            {/* Circles Div */}
            <div className="flex justify-center">
               <div className="flex self-end rounded-full h-4 w-4 bg-[#00675e]"></div>
               <div className=" flex justify-center items-center rounded-full h-18 w-18 bg-[#ecd4ff]"><Rocket size={30} color="grey"></Rocket></div>
               <div className="flex self-start rounded-full h-4 w-4 bg-[#7e4f00]"></div>
            </div>

            {/* Text area */}
            <div className="mt-10">
               <div className="flex justify-center text-center font-sans font-bold text-3xl max-w-11/12  text-[#39264c]">Start your first streak</div>
               <div className="flex text-center justify-center font-normal text-[#8479c4] mt-4">Pick something you want to do every day. Log it once and watch the streak grow.</div>
            </div>

            {/* Add habit button */}
            <div className="flex justify-center w-full mt-8"><Button onClick = {()=> {
               navigate("/define-habit");
               setForm(formFormat)}} buttonInfo = {buttonInfo}/></div>

            {/* Quick starts */}
            <div className="flex flex-col items-center mt-10 ">
               <div className="font-semibold text-sm font-sans text-[#8470b0]">QUICK STARTS</div>

               {/* Habits container */}
               <div className="flex flex-wrap justify-center gap-3 mt-5">
                  {quickStarts.map((eachHabit, i) => {
                     const Icon = eachHabit.habitIcon;
                     // Each Habit
                     return (
                        <div
                           key={i}
                           className="cursor-pointer flex flex-row text-nowrap justify-center items-center bg-[#f9ecff] shadow px-7 py-3 gap-3 w-40 border border-gray-200 rounded-full"
                           onClick={() => {
                              setForm((prev) => ({...prev, habitData: {...prev.habitData,
                                 habitName: eachHabit.habitName,
                                 habitDescription: "",
                                 habitUnit: eachHabit.habitUnit,
                                 habitGoal: {
                                    exist: eachHabit.habitGoal.exist,
                                    value: (eachHabit.habitGoal.exist ? eachHabit.habitGoal.value : 0)},
                                 habitIcon: Icon}}));
                              navigate("/define-habit");
                              }}>
                           <Icon size={20} color="#67537c"></Icon>
                           <div className="text-base font-sans font-normal text-[#67537c]">{eachHabit.habitName}</div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </div>
  )
}
