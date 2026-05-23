import { useState } from 'react';
import {useNavigate } from "react-router-dom";


import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Toggle from "../components/UI/Toggle.jsx";

import { LockKeyhole, ArrowRight, ShieldCheck, Ban, ArrowLeft } from 'lucide-react';



export default function SecurityAndPrivacyPage() {
   const navigate = useNavigate();

   const inputInfos = [
      {
         label: "short",
         placeholder: "Current Password",
         type: "password",
         name: "currentPassword",
         required: true,
         heading: "",
         options: []
      },
      {
         label: "short",
         placeholder: "New Password",
         type: "password",
         name: "newPassword",
         required: true,
         heading: "",
         options: []
      },
      {
         label: "short",
         placeholder: "Confirm New Password",
         type: "password",
         name: "confirmNewPassword",
         required: true,
         heading: "",
         options: []
      }
   ]

   const buttonInfo = {
      text: "Update Password",
      icon: ArrowRight,
      backgroundColor: "#8B5CF6",
      textColour: "white"
   }

   const PrivacySettings = [
      {
         detail: "Profile visibility",
         toggle: false
      },
      {
         detail: "Data Sharing Preferences",
         toggle: false
      },
      {
         detail: "Account privacy",
         toggle: false
      }
   ]

   const [privacySettings, setprivacySettings] = useState(PrivacySettings)
  return (
   // Main div
    <div className="flex justify-center pb-20">
      {/* Element div */}
      <div className='w-1.3/4'>
         {/* Heading */}
         <div className="flex items-center justify-center gap-5">
            <div
               onClick={() => {
               navigate("/profile")
            }}
            className="cursor-pointer p-3 rounded-full bg-white">
               <ArrowLeft color="gray"/>
            </div>
            <div className="text-4xl font-bold font-sans">Security And Privacy</div>
         </div>

         {/* Left Section */}
         <div className='w-full'>
            {/* Change of password form */}
            <div className="flex flex-col items-start mt-10 w-full rounded-3xl bg-white px-10 pb-10 pt-5 shadow">
               {/* Lock and header */}
               <div className='flex items-center gap-3'>
                  <div className='flex justify-center items-center h-11 w-11 bg-[#8B5CF6] rounded-full'><LockKeyhole color='white'/></div>
                  <div className="text-lg text-[#494454] font-sans font-bold tracking-wide">Change Password</div>
               </div>

               <div className='flex flex-col items-center w-full'>
                  {/* Input field */}
                  <div className='w-full'>
                     <Input inputInfo={inputInfos}/>
                  </div>
                  {/* Buttons */}
                  <div className="flex flex-col w-full mt-10"><Button buttonInfo={buttonInfo}/></div>
               </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="w-full bg-white rounded-4xl shadow mt-5">
               <div className="flex justify-between items-center p-4.5">
                  {/* Setting details and Icon */}
                  <div className="flex gap-3 items-center px-2 py-1">
                     <div className='bg-[#fff2e1] p-2 rounded-full'>
                        <ShieldCheck color="#7e4f00" size={20}/>
                     </div>
                     <div>
                        <div className="font-sans font-bold">Two-Factor Authentication</div>
                        <div className='text-gray-500'>Enhanced security for your account</div>
                     </div>
                  </div>

                  {/* Toggle Button and Dropdown */}
                  <Toggle/>
               </div>
            </div>

            {/* Blocked Users */}
            <div className="w-full bg-white rounded-4xl shadow mt-5">
               <div className="flex justify-between items-center p-4.5">
                  {/* Setting details and Icon */}
                  <div className="flex gap-3 items-center px-2 py-1">
                     <div className='bg-[#fff2e1] p-2 rounded-full'>
                        <Ban color="#ba1a1a" size={20}/>
                     </div>
                     <div>
                        <div className="font-sans font-bold">Blocked Users</div>
                     </div>
                  </div>

                  <button className='text-sm text-gray-600 font-sans border rounded-full px-4 py-2 cursor-pointer'>Manage List</button>
               </div>
            </div>
         </div>

         <div className=''>
            <div className="flex flex-col items-start mt-10 w-full rounded-3xl bg-white px-10 pb-10 pt-5 shadow">
               <div className="text-lg text-[#494454] font-sans font-bold tracking-wide">Privacy Settings</div>
               <div className='flex flex-col gap-3 w-full mt-5'>
                  {privacySettings.map((eachSetting, i) => {
                     return (
                        <div
                           key={i}
                           className='flex justify-between'>
                              <div>{eachSetting.detail}</div>
                              <div><Toggle/></div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
