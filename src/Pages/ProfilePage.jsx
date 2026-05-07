import {useContext} from "react";
import UserContext from "../UserContext";
import { useState } from "react";
import { User, ShieldCheck, ChevronRight, BellRing, Clock, Mail, Palette, Globe, HatGlasses, LogOut } from 'lucide-react';
import ElementHeader from "../components/UI/ElementHeader.jsx";
import Button from "../components/UI/Button.jsx";
import CircleIcon from "../components/UI/CircleIcon.jsx";
import Toggle from "../components/UI/Toggle.jsx";
import DropDown from "../components/UI/DropDown.jsx";

export default function ProfilePage() {
   const { user } = useContext(UserContext);


   const ElementInfo = {
      Icon: User ,
      Header : `@${user}`,
      Info: "I am a bright shining light"
   }
   const [elementInfo, setElementInfo] = useState(ElementInfo);


   const buttonInfo = {
         text: "Sign Out",
         icon: LogOut,
         backgroundColor: "#ffdad6",
         textColour: "#ad343b"
      }

   const profilecard = [
      {
         id: "card-1",
         cardTitle: "Personal Information",
         cardSubTitle: "Email, Phone, Bio",
         icon: User,
         iconColor: "#8B5CF6",
         bgColor: "#e9ddff"
      },
      {
         id: "card-2",
         cardTitle: "Security and Privacy",
         cardSubTitle: "Password, privacy",
         icon: ShieldCheck ,
         iconColor: "#8B5CF6",
         bgColor: "#e9ddff"
      }

   ]

   const profileSettings = [
      {
         heading: "NOTIFICATIONS",
         headingSettings: [{text: "Push Notifications", icon: BellRing}, {text: "Streak Reminders", icon: Clock}, {text: "Weekly Digest", icon: Mail}],
         hasToggle: {confirm: true, value: false}
      },
      {
         heading: "PREFERENCE",
         icon: Clock,
         headingSettings: [{text: "Appearance", icon: Palette}, {text: "Language", icon: Globe}, {text: "Data & Privacy", icon: HatGlasses}],
         hasToggle: {confirm: false, value: ["Light", "English", ""]}
      }
   ]
   return (
      // Main div
      <div className="flex justify-center">
         {/* Elements div */}
         <div className="flex flex-col items-center w-1/4 mb-10">
            {/* Element Header */}
            <ElementHeader elementInfo={elementInfo}/>

            {/* Personal  Info and Security */}
            <div className="flex flex-col gap-5 w-full mt-10">
               {profilecard.map((eachCardInfo, i) =>{
                  return (
                     <div key={i} className="flex items-center justify-between w-full py-3 px-5 bg-[#ece3f494] rounded-full">
                        <div className="flex items-center justify-center gap-6 w-full">
                           <CircleIcon key = {eachCardInfo.id} circleIconInfo = {eachCardInfo}/>
                           <div className="w-full">
                              <div className="text-[#1d1a23] font-bold text-xl">{eachCardInfo.cardTitle}</div>
                              <div className="flex items-center text-[#717171] gap-1">{eachCardInfo.cardSubTitle}</div>
                           </div>
                        </div>
                        <ChevronRight color="#717171" size={20} />
                     </div>
                  )})
               }
            </div>

            {/* Notifications Section and Preference */}
            {profileSettings.map((eachSettings, i) => {
               return(
                  <div key = {i} className="w-full mt-10">
                     {/* Heading */}
                     <div className="text-[#746e7c] font-sans tracking-widest">
                        {eachSettings.heading}
                     </div>

                     {/* cards */}
                     <div className="w-full bg-white rounded-4xl shadow">
                        <div className="w-full">
                           {eachSettings.headingSettings.map((eachSetting, index ) => {
                              const Icon = eachSetting.icon
                              return(
                                 <div key = {index} className="flex justify-between items-center p-4.5 mt-3">
                                    {/* Setting details and Icon */}
                                    <div className="flex gap-3 items-center">
                                       <div><Icon color="#8B5CF6" size={22}/></div>
                                       <div className="font-sans text-lg">{eachSetting.text}</div>
                                    </div>

                                    {/* Toggle Button and Dropdown */}
                                    {eachSettings.hasToggle.confirm ? <Toggle/> : <DropDown value = {eachSettings.hasToggle.value} Index = {index}/>}
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                  </div>
               )
            })}

            {/* Sign Out Button */}
            <div className="w-full mt-10 mb-3"><Button buttonInfo = {buttonInfo}/></div>
            <div className="text-sm text-gray-400">
               Streakflow v0.1.0 (Initial Build)
            </div>
         </div>
      </div>
  );
}