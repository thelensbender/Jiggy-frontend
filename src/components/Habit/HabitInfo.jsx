import { Zap, FileCodeCorner, Dumbbell, EyeOff } from 'lucide-react';

export default function HabitInfo({habit}) {
   const Icon = habit.icon;
   return (
      <div>
         <div className="flex w-full gap-3 items-center">
            <div style={{ backgroundColor: habit.divBackground }} className="flex justify-center items-center rounded-full h-13 w-13"><Icon color={habit.iconColor} size={20}></Icon></div>
            <div>
               <div className="text-[#1d1a23] font-bold">{habit.name}</div>
               <div className="flex items-center text-[#717171] gap-1"><Zap color="#845403" size={15}></Zap>{habit.streak} {habit.unit}</div>
            </div>
         </div>
      </div>
   )
}
