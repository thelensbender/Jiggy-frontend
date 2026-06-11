// Hooks
import {useContext} from "react";
import UserContext from "../../Context/UserContext";
import {useNavigate } from "react-router-dom";

// Functions and utilities
import { iconMap } from "../../utils/IconMap";
import { toISODate } from "../../utils/dateUtils";

// Icons
import { Zap, FileCodeCorner, Dumbbell, EyeOff , Trash2, CheckCheck } from 'lucide-react';

export default function HabitCard({habit, setShowConfirm, setSelectedHabit}) {
   const today = toISODate(new Date());
   const isLoggedToday = habit.entries[(habit.entries.length - 1)]?.date === today

   const { setForm, formFormat } = useContext(UserContext);
   const navigate = useNavigate();

   const Icon = iconMap[habit.habitIcon];
   const habitName = habit.habitName;

   return (
      <div className="relative rounded-md flex items-center justify-between gap-5 bg-[#fffdff] py-5 px-3 md:px-5 group transition-all duration-200 hover:shadow-xl">
         <div className="flex gap-3 items-center">
            {/* Icon circle background */}
            <div style={{ backgroundColor: habit.divBackground }} className="flex justify-center items-center rounded-full h-13 w-13 lg:h-16 lg:w-16"><Icon color={habit.habitIconColor} size={20}></Icon></div>
            <div>
               <div className="text-[#1d1a23] font-bold lg:text-lg">{habitName.length > 20 ? ( habitName.slice(0, 20) + "...") : habitName}</div>
               <div className="flex items-center text-[#717171] gap-1"><Zap color="#845403" size={15}></Zap>{habit.streak} {(habit.habitUnit === "days" ? (habit.streak <= 1 ? "day" : "days") : (habit.streak <= 1 ? "hour" : "hours"))}</div>
            </div>
         </div>
         {/* Log button or logged icon */}
         {isLoggedToday ?
            <div className="flex p-5 justify-center items-center"><CheckCheck size={20} color="#8B5CF6"/></div>
            :
            <button
               onClick={() => {
                  setForm(formFormat);
                  navigate(`/log-entry/${habit.habitId}`);
               }}
               className="cursor-pointer bg-linear-to-br from-[#8B5CF6] to-[#a581f8df] rounded-full text-[#f5f2fd] px-4 py-2 shadow z-10">
                  Log
            </button>
         }
         {/* Delete button */}
         <div
         onClick={() => {
            setSelectedHabit(habit);
            setShowConfirm(true);
         }}
         className="flex absolute md:bottom-14 md:right-0 bottom-15 -right-1 opacity-50 md:bg-gray-200  p-2 rounded-tr cursor-pointer md:invisible transition-all duration-150 hover: md:group-hover:visible">
            <Trash2 size={19}/>
         </div>
      </div>
   )
}