import { ChartColumnIncreasing } from 'lucide-react';
import ElementHeader from '../components/UI/ElementHeader';


export default function StatTab() {
   const ElementInfo = {
      icon: ChartColumnIncreasing,
      header : "Weekly Progress",
      info: "Consistency Score: 94%",
      editable: {status: false, icon: ""}
   }
   return (
      // Main div
      <div className="flex justify-center">
         {/* Elements div */}
         <div className="flex flex-col items-center w-1/4">
            <div  className="flex flex-col items-center">
               <ElementHeader elementInfo={ElementInfo} />
            </div>
            <div className="flex gap-4 justify-between">
               <div className="flex flex-col bg-white p-5 mt-10 w-50 rounded-lg shadow">
                  <div className="text-lg text-[#494454] font-sans font-bold tracking-widest">Active Streak</div>
                  <div className="flex items-end gap-1">
                     <div className="text-[#743cda] text-3xl font-medium font-sans">12</div>
                     <div>days</div>
                  </div>
               </div>
               <div className="flex flex-col bg-white p-5 mt-10 rounded-lg shadow w-50">
                  <div className="text-lg text-[#494454] font-sans font-bold tracking-widest">Best</div>
                  <div className="flex items-end gap-1">
                     <div className="text-[#845403] text-3xl font-medium font-sans">42</div>
                     <div>days</div>
                  </div>
               </div>
            </div>


            {/* GRAPH SPACE */}
         </div>
      </div>
   )
}
