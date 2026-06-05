// Hooks
import { useContext, useState } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

// Icons
import { Check, Zap, Plus, Trash2 } from 'lucide-react';

// Components
import Button from "../components/UI/Button.jsx";
import HabitCard from "../components/Habit/HabitCard.jsx";
import ConfirmLayout from "../components/Layout/ConfirmLayout.jsx";
import NoHabitPage from "./NoHabitPage.jsx";



// REMEMBER THAT THE HABIT DATA ISNT HERE, IT MIGHT NOT WORK UNTIL YOU CONNECT IT WITH THE DATA
export default function Dashboard() {
   const navigate = useNavigate();
   const [showConfirm, setShowConfirm] = useState(false);

   const [selectedHabit, setSelectedHabit] = useState(null);


   const { habits, setHabits, setForm, formFormat, notify } = useContext(UserContext);
   const buttonInfoAdd = {
      text: habits.length > 0 ? "Add new Habit" : "Add your First Habit",
      icon: Plus,
      backgroundColor: "#8B5CF6",
      textColour: "white"
   }
   const confirmDetails ={
      icon: Trash2,
      header : "Delete this Habit?",
      info: (habitName) =>(
            <>
               You're about to delete<span className='text-[#8B5CF6]  font-bold'> {habitName.length > 20 ? ((habitName).slice(0, 20) + "...") : habitName} </span> <strong>permanently</strong>!. This means <strong>you will lose all your progress</strong>. Are you sure?
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
               notify(`Deleted ${selectedHabit.habitName.length > 20 ? ((selectedHabit.habitName).slice(0, 20) + "...") : selectedHabit.habitName} successfully`, "success");
               setShowConfirm(false);
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
         <div className="flex justify-center">
            {/* Elements div */}
            <div className="flex flex-col items-center">
               <div>
                  {/* Dashboard motivaion */}
                  <div className="text-2xl text-center md:text-left font-bold font-sans md:text-4xl">{habits.length === 0 ? "Build your first streak today 🔥" : "Keep the streak alive🔥"}</div>
                  {/* Date */}
                  <div className="text-[#746e7c] text-center md:text-left font-sans md:text-xl">Tuesday, April 21</div>
               </div>

               {/* Fire div. I want to add animation after */}
               <div className="w-30"><div className="w-full"></div></div>

                {/* Bolt div */}
               <div className={`flex justify-center items-center rounded-full h-18 w-18  mt-10 shadow-lg ${habits.length === 0 ? 'bg-black': 'bg-[#8B5CF6]'} `}><Zap color="white" size={40}></Zap></div>

               {/* Habits preview master div*/}
               <div className="mt-10 md:w-full">
                  {/* Habit Preview Headers */}
                  {  habits.length !== 0 ?
                     <div className="flex justify-between w-full">
                        <div className="text-sm text-[#494454] font-sans font-bold tracking-widest md:text-lg">YOUR HABITS</div>
                        <div
                        onClick={()=> {
                           navigate("/habit")
                        }}
                        className="cursor-pointer text-[#5515bd] font-san">{habits.length > 3 ? 'View All' : ""}</div>
                     </div>
                     :
                     <NoHabitPage/>
                  }

                  {/* Habits preview*/}
                  <div className="flex flex-col gap-3 mt-5 md:gap-5">
                     {habits.slice(0, 3).map((eachHabit, i) => {
                        // const progress = Math.round((eachHabit.streak / eachHabit.habitGoal.value) * 100);

                        // Each Habit
                        return (
                           <HabitCard setShowConfirm = {setShowConfirm} setSelectedHabit={setSelectedHabit} key={i} habit={eachHabit}/>
                           // <div>{progress ? progress + "%" : (progress === 0 ? "0" + "%" : "")}</div>
                           // Log progress
                        )
                     })}
                  </div>

                  {/* Add habit button */}
                  <div className="flex justify-center w-full mt-8"><Button onClick={()=>{
                     setForm(formFormat);
                     navigate("/define-habit");
                     }} buttonInfo = {buttonInfoAdd}/></div>
               </div>
            </div>
         </div>
      </>
  )
}
