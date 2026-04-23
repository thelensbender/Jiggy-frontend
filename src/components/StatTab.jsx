import { ChartColumnIncreasing } from 'lucide-react';


export default function StatTab() {
   return (
      // Main div
      <div className="flex items-center justify-center h-full">
         {/* Elements div */}
         <div className="flex flex-col items-center w-1/4">
            <div  className="flex flex-col items-center">
               <div className="flex justify-center items-center rounded-full h-18 w-18 bg-[#8B5CF6] mt-10 shadow-lg"><ChartColumnIncreasing color="white" size={35}></ChartColumnIncreasing></div> {/* Bolt div */}
               <div className="text-4xl font-bold font-sans">Weekly Progress</div>
               <div className="text-[#746e7c] font-sans mt-2">Consistency Score: 94%</div> {/* Consistency score. Remember to make it dynamic. */}
            </div>
            <div className="flex gap-4 justify-between">
               <div className="flex flex-col bg-white p-5 mt-10 rounded-lg shadow">
                  <div className="text-lg text-[#494454] font-sans font-bold tracking-widest">Active Streak</div>
                  <div className="flex items-end gap-1">
                     <div className="text-[#743cda] text-3xl font-medium font-sans">12</div>
                     <div>days</div>
                  </div>
               </div>
               <div className="flex flex-col bg-white p-5 mt-10 rounded-lg shadow">
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
