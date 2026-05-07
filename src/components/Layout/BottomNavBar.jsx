import { Calendar1, Layers, ChartColumnIncreasing, Settings , Icon} from 'lucide-react';

import {useNavigate } from "react-router-dom";

export default function BottomNavBar() {
   const navigate = useNavigate();

   const buttomNav = [
      {
         tabName: "Today",
         Icon: Calendar1,
         navigate: "/dashboard"
      },
      {
         tabName: "Habits",
         Icon: Layers,
         navigate: "/habit"
      },
      {
         tabName: "Stats",
         Icon: ChartColumnIncreasing,
         navigate: "/stats"
      },
      {
         tabName: "Settings",
         Icon: Settings,
         navigate: "/profile"
      }
   ]
  return (
   // Main div
   <div className="w-full fixed bottom-0 bg-white h-20 px-40 z-10">
      {/* Grouped tab div */}
      <div className="flex items-center justify-between px-3 h-full">
         {buttomNav.map((eachTab, i) => {
            const Icon = eachTab.Icon;
            // Each Tab
            return (
               <div
                  key={i}
                  onClick={() => {navigate(eachTab.navigate)}}
                  className="flex flex-col items-center">
                  <Icon color="#343434"></Icon>
                  <div className="text-[#343434] text-sm mt-1">{eachTab.tabName}</div>
               </div>
            )
         })}
      </div>
   </div>
  )
}
