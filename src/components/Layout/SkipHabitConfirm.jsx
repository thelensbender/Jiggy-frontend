import {useNavigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "../../UserContext";


import { Calendar, X } from 'lucide-react';

import Button from '../UI/Button';

export default function SkipHabitConfirm({setShowSkipConfirm, findHabit}) {
   const navigate = useNavigate();
   const { recentPage, notify } = useContext(UserContext);

   const buttonInfo = [
      {
         text: "No, go back",
         icon: "",
         backgroundColor: "white",
         textColour: "#746e7c",
         onClick: () => {
            setShowSkipConfirm(false);
         }
      },
      {
         text: "Yes, skip today",
         icon: "",
         backgroundColor: "#8B5CF6",
         textColour: "white",
         onClick: ()=> {
            notify(`Skipped ${findHabit.habitName} for today`, "success");
            navigate("/habit");
         }
      }
   ]
  return (
    <div className=' z-50 inset-0 fixed  flex flex-col justify-center items-center w-screen h-screen backdrop-blur-md'>
      {/* Elements container */}
      <div className='flex backdrop-blur-md flex-col justify-center items-center max-w-2/7 p-10 bg-white rounded-3xl shadow'>
         <button
            onClick = {() => {
               setShowSkipConfirm(false);}
            }
            className='flex justify-end cursor-pointer w-full'><X/></button>
         <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center bg-[#f5f0ff] w-18 h-18 rounded-full'><Calendar size={40} color='#8B5CF6'/></div>
            <div className='text-2xl font-bold font-sans mt-6'>Skip for Today?</div>
            <div className='bg-[#ffddb7] py-1.5 px-5 border border-[#ffd3a0] rounded-full font-bold mt-4'>🔥{findHabit.streak > 1 ? `${findHabit.streak}-days` : `${findHabit.streak}-day`} streak at risk</div>
         </div>
         <div className='text-wrap text-center text-[#5b5665] text-lg mt-6'>
            You're about to skip <span className='text-[#8B5CF6]  font-bold'> {findHabit.habitName} </span>for today. Skipping will <strong>break</strong> your current streak. Are you sure?
         </div>
         <div className="flex flex-col gap-3 w-full mt-10">
            {buttonInfo.map((buttonInfo, i) =>{
               return (
                  <Button
                  key={i}
                  onClick={buttonInfo.onClick}
                  buttonInfo={buttonInfo}/>
               )
            })}
         </div>
      </div>
    </div>
  )
}
