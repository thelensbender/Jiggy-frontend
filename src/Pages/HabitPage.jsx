// Hooks
import {useContext, useState} from "react";
import UserContext from "../Context/UserContext.js";
import {useNavigate} from "react-router-dom";

// Icons
import { Plus, Trash2 } from "lucide-react"

// Components
import HabitCard from "../components/Habit/HabitCard"
import Button from "../components/UI/Button"
import ConfirmLayout from "../components/Layout/ConfirmLayout.jsx";
import NoHabitPage from "./NoHabitPage.jsx";


export default function AllHabit() {
   const navigate = useNavigate();
   const [showConfirm, setShowConfirm] = useState(false);
   const [selectedHabit, setSelectedHabit] = useState(null);

   const { habits, setHabits, setForm, formFormat, notify } = useContext(UserContext);
   const buttonInfo ={
      text: "Add new Habit",
      icon: Plus,
      backgroundColor: "#8B5CF6",
      textColour: "white"
   }

   // The details of the confirmation pop-up
      const confirmDetails ={
      icon: Trash2,
      header : "Delete this Habit?",
      info: (habitName) => (
            <>
               You're about to delete<span className='text-[#8B5CF6]  font-bold'> {habitName.length > 20 ? ((habitName).slice(0, 20) + "...") : habitName} </span> <strong>permanently</strong>! This means <strong>you will lose all your progress</strong>. Are you sure?
            </>
      ),
      buttonInfo: [
         {
            text: "No, go back",
            backgroundColor: "white",
            textColour: "#746e7c",
            onClick: () => setShowConfirm(false)
         },
         {
            text: `Yes, delete `,
            backgroundColor: "#8B5CF6",
            textColour: "white",
            onClick: () => {
               setHabits((prev) =>
                  prev.filter((habit) => habit.habitId !== selectedHabit.habitId)
               );
               setShowConfirm(false);
               notify(`Deleted ${selectedHabit.habitName.length > 20 ? ((selectedHabit.habitName).slice(0, 20) + "...") : selectedHabit.habitName} successfully`, "success");
            }
         }
      ]
   }
   return (
      // Main div
      <>
         {showConfirm && (
            <ConfirmLayout confirmDetails = {confirmDetails} habit = {selectedHabit} setShowConfirm = {setShowConfirm} />
         )}
         <div className="flex justify-center -mt-10">
            {/* Elements div */}
            <div className="flex flex-col items-center sm:w-3/6 lg:w-2/5 xl:w-2/7">
               {/* All Habits master div*/}
               <div className="mt-10 md:w-full">
                  {/* Habit Preview Headers */}
                  <div className="flex justify-between items-center">
                     <div className="flex flex-col justify-center">
                        <div className="text-lg md:text-2xl text-[#494454] font-sans font-bold tracking-widest">ALL HABITS</div>
                        <div className="text-[#5515bd] font-san text-sm md:text-base">Stay Focused, Stay Jiggy!</div>
                     </div>
                     {/* Fire div. I want to add animation after. */}
                     <div className={`flex justify-center items-center rounded-full h-14 w-14 shadow-lg ${habits.length === 0 ? 'bg-black': 'bg-[#8B5CF6]'}`}>
                        <div className="text-2xl">🔥</div>
                     </div>
                  </div>

                  {/* Habits preview*/}
                  <div>
                     {habits.length !== 0 ?
                        <div className="flex flex-col gap-3 md:gap-5 mt-8">
                           {habits.map((eachHabit, id) => {
                              // Each Habit
                              return (
                                 <HabitCard setShowConfirm = {setShowConfirm} setSelectedHabit={setSelectedHabit} key={id} habit={eachHabit}/>
                              )
                           })}
                        </div>
                        :
                        <NoHabitPage/>
                     }
                  </div>

                  {/* Add habit button */}
                  <div className="flex justify-center w-full mt-8"><Button onClick={()=>{
                     setForm(formFormat)
                     navigate("/define-habit");
                     }} buttonInfo = {buttonInfo}/></div>
               </div>
            </div>
         </div>
      </>
   )
}
