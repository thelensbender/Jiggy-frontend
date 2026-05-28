import UserContext from "../../UserContext";


import { X } from 'lucide-react';

import Button from '../UI/Button';

export default function ConfirmLayout({setShowConfirm, habit, confirmDetails}) {

   const buttonInfo = confirmDetails.buttonInfo;
   const Icon = confirmDetails.icon;
   const header = confirmDetails.header;
   const info = confirmDetails.info;


  return (
    <div className=' z-50 inset-0 fixed  flex flex-col justify-center items-center w-screen h-screen backdrop-blur-md'>
      {/* Elements container */}
      <div className='flex backdrop-blur-md flex-col justify-center items-center max-w-2/7 p-10 bg-white rounded-3xl shadow'>
         <button
            onClick = {() => {
               setShowConfirm(false);}
            }
            className='flex justify-end cursor-pointer w-full'><X/></button>
         <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center bg-[#f5f0ff] w-18 h-18 rounded-full'><Icon size={40} color='#8B5CF6'/></div>
            <div className='text-2xl font-bold font-sans mt-6'>{header}</div>
            <div className='bg-[#ffddb7] py-1.5 px-5 border border-[#ffd3a0] rounded-full font-bold mt-4'>🔥{habit.streak > 1 ? `${habit.streak}-days` : `${habit.streak}-day`} streak at risk</div>
         </div>
         <div className='text-wrap text-center text-[#5b5665] text-lg mt-6'>
            {info(habit.habitName)}
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
