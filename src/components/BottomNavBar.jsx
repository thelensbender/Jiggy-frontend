import { Calendar1, Layers, ChartColumnIncreasing, Settings , Icon} from 'lucide-react';


export default function BottomNavBar() {
   const buttomNav = [
      {
         tabName: "Today",
         Icon: Calendar1
      },
      {
         tabName: "Habits",
         Icon: Layers
      },
      {
         tabName: "Stats",
         Icon: ChartColumnIncreasing
      },
      {
         tabName: "Settings",
         Icon: Settings
      }
   ]
  return (
   // Main div
   <div className="w-full fixed bottom-0 bg-white h-20 px-40">
      {/* Grouped tab div */}
      <div className="flex items-center justify-between px-3 h-full">
         {buttomNav.map((eachTab) => {
            const Icon = eachTab.Icon;
            // Each Tab
            return (
               <div className="flex flex-col items-center">
                  <Icon color="#343434"></Icon>
                  <div className="text-[#343434] text-sm mt-1">{eachTab.tabName}</div>
               </div>
            )
         })}
      </div>
   </div>
  )
}
