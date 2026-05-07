import {useContext} from "react";
import UserContext from "../../UserContext";
import {useNavigate } from "react-router-dom";

import { Zap, FileCodeCorner, Dumbbell, EyeOff } from 'lucide-react';

export default function HabitCard({habit}) {
   const { setForm, formFormat } = useContext(UserContext);
   const navigate = useNavigate();

   const Icon = habit.habitIcon;
   return (
      <div className="flex items-center justify-between gap-.5  bg-[#fffdff] p-5">
         <div className="flex gap-3 items-center">
            <div style={{ backgroundColor: habit.divBackground }} className="flex justify-center items-center rounded-full h-13 w-13"><Icon color={habit.habitIconColor} size={20}></Icon></div>
            <div>
               <div className="text-[#1d1a23] font-bold">{habit.habitName}</div>
               <div className="flex items-center text-[#717171] gap-1"><Zap color="#845403" size={15}></Zap>{habit.streak} {habit.habitUnit}</div>
            </div>
         </div>

         <button
            onClick={() => {
               setForm(formFormat);
               navigate(`/log-entry/${habit.habitId}`);
            }}
            className="cursor-pointer bg-linear-to-br from-[#8B5CF6] to-[#a581f8df] rounded-full text-[#f5f2fd] px-4 py-2 shadow">
               Log
         </button>
      </div>
   )
}