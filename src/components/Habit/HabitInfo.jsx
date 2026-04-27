import { Zap, FileCodeCorner, Dumbbell, EyeOff } from 'lucide-react';

export default function HabitInfo({habits}) {
   const Icon = habits.icon;
   return (
      <div>
         <div className="flex w-full gap-3 items-center">
            <div style={{ backgroundColor: habits.divBackground }} className="flex justify-center items-center rounded-full h-13 w-13"><Icon color={habits.iconColor} size={20}></Icon></div>
            <div>
               <div className="text-[#1d1a23] font-bold">{habits.name}</div>
               <div className="flex items-center text-[#717171] gap-1"><Zap color="#845403" size={15}></Zap>{habits.streak} {habits.unit}</div>
            </div>
         </div>
      </div>
   )
}
