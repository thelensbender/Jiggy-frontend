import { Calendar1, Layers, ChartColumnIncreasing, Settings , Icon} from 'lucide-react';

import { useNavigate, NavLink } from "react-router-dom";

export default function BottomNavBar() {
   // Describe the data of each tab button
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
         navigate: "/settings"
      }
   ]
  return (
   // Main div
   <div className="flex justify-center items-center w-full fixed bottom-0 bg-white md:h-20 md:px-40 z-10">
      {/* Grouped tab div */}
      <div className="flex items-center justify-between gap-5 md:gap-10 lg:gap-15 xl:gap-25 h-full">
         {buttomNav.map((eachTab, i) => {
            // Each Tab
            return (
               <NavLink
                  key={i}
                  to = {eachTab.navigate}
                  draggable="false"
                  className={({ isActive }) => `flex flex-col items-center cursor-pointer py-4 px-6 rounded-2xl transition-all duration-100 hover:bg-[#8a5cf646] ${ isActive ? 'bg-[#8b5cf6] hover:bg-[#8b5cf6] shadow ' : 'bg-white'}`}>

                  {({ isActive }) => {
                     const Icon = eachTab.Icon;
                     return (
                        <>
                           <Icon color={ isActive ? '#f3f4f6' : '#343434' }></Icon>
                           <div className={ `text-sm mt-1 ${ isActive ? 'text-gray-100' : 'text-[#343434]'}`}>{eachTab.tabName}</div>
                        </>
                     )
                  }
                  }
               </NavLink>
            )
         })}
      </div>
   </div>
  )
}
