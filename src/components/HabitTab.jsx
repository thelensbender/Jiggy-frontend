const habit = {};
// REMEMBER THAT THE HABIT DATA ISNT HERE, IT MIGHT NOT WORK UNTIL YOU CONNECT IT WITH THE DATA
export default function AllHabit() {
   return (
      // Main div
      <div className="flex items-center justify-center h-full">
         {/* Elements div */}
         <div className="flex flex-col items-center px-3 py-5 h-4/5 w-1/4">
            {/* All Habits master div*/}
            <div className="w-full m-10">
               {/* Habit Preview Headers */}

               <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col self">
                     <div className="text-lg text-[#494454] font-sans font-bold tracking-widest">ALL HABITS</div>
                     <div className="text-[#5515bd] font-san">Stay Focused, Stay Kinetic!</div>
                  </div>
                  {/* Fire div. I want to add animation after. */}
                  <div className="flex justify-center items-center rounded-full h-14 w-14 bg-[#8B5CF6] mt-10 shadow-lg">
                     <div className="text-2xl">🔥</div>
                  </div>
               </div>

               {/* Habits preview*/}
               <div className="flex flex-col gap-5 mt-3">
                  {habit.map((eachHabit) => {
                     // Each Habit
                     return (
                        <div key={eachHabit.id} className="flex items-center justify-between gap-5 rounded-lg bg-[#fffdff] p-5">
                           <HabitInfo habit={eachHabit}/>

                           {/* Log progress */}
                           <div className="bg-linear-to-br from-[#8B5CF6] to-[#a581f8df] rounded-full text-[#f5f2fd] px-4 py-2 shadow">Log</div>
                        </div>
                     )
                  })}
               </div>

               {/* Add habit button */}
               <Button />
            </div>
         </div>
      </div>
   )
}
