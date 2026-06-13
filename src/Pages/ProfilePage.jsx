import {useContext} from "react";
import UserContext from "../Context/UserContext.js";
import {useNavigate } from "react-router-dom";

// Icon
import { User, ShieldCheck, ChevronRight, BellRing, Clock, Mail, Palette, Globe, LogOut } from 'lucide-react';

// Components
import ElementHeader from "../components/UI/ElementHeader.jsx";
import Button from "../components/UI/Button.jsx";
import CircleIcon from "../components/UI/CircleIcon.jsx";
import Toggle from "../components/UI/Toggle.jsx";
import DropDown from "../components/UI/DropDown.jsx";


export default function ProfilePage() {
   const { userInfo } = useContext(UserContext);
   const navigate = useNavigate();

   const elementInfo = {
      icon: userInfo.profilePicture ? userInfo.profilePicture : "User" ,
      header : userInfo.fullName ? userInfo.fullName : "Add your Full Name",
      info: `@${userInfo.username}`,
      info2: userInfo.bio ? userInfo.bio : "Add a bio",
      editable: {status: false, icon: ""}
   }


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
         cardSubTitle: "Email, Username, Bio, Wallet Address",
         icon: User,
         iconColor: "#8B5CF6",
         bgColor: "#e9ddff",
         navigate: "/settings/personal-information"
      },
      {
         id: "card-2",
         cardTitle: "Security and Privacy",
         cardSubTitle: "Password, Two-Factor Auth, Privacy",
         icon: ShieldCheck ,
         iconColor: "#8B5CF6",
         bgColor: "#e9ddff",
         navigate: "/settings/security-and-privacy"
      }
   ]

   const profileSettings = [
      {
         heading: "NOTIFICATIONS",
         headingSettings: [{text: "Push Notifications", icon: BellRing}, {text: "Streak Reminders", icon: Clock}, {text: "Weekly Digest", icon: Mail}],
         hasToggle: {confirm: true, value: []}
      },
      {
         heading: "PREFERENCE",
         icon: Clock,
         headingSettings: [{text: "Appearance", icon: Palette}, {text: "Language", icon: Globe}],
         hasToggle: {confirm: false, value: [userInfo.preference?.theme, userInfo.preference?.language]}
      }
   ]
   return (
      // Main div
      <div className="flex justify-center">
         {/* Elements div */}
         <div className="flex flex-col items-center mb-10">
            {/* Element Header */}
            <ElementHeader elementInfo={elementInfo}/>

            {/* Personal  Info and Security */}
            <div className="flex flex-col gap-5 w-full mt-10">
               {profilecard.map((eachCardInfo, i) =>{
                  return (
                     <div
                        key={i}
                        onClick={()=>{
                           navigate(eachCardInfo.navigate);
                        }}
                        className="cursor-pointer flex items-center justify-between w-full py-2 px-2 md:py-3 md:px-5 bg-[#ece3f494] rounded-full  transition-all duration-200 hover:bg-[#d2cbd8]">
                        <div className="flex items-center justify-center gap-6 w-full">
                           <CircleIcon key = {eachCardInfo.id} circleIconInfo = {eachCardInfo}/>
                           <div className="w-full">
                              <div className="text-[#1d1a23] font-bold text-lg md:text-xl">{eachCardInfo.cardTitle}</div>
                              <div className="flex items-center text-[#717171] text-xs md:text-base gap-1">{eachCardInfo.cardSubTitle}</div>
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
                     <div className="text-[#746e7c] text-sm md:text-base font-sans tracking-widest mb-3">
                        {eachSettings.heading}
                     </div>
                     <div className="text-sm md:text-base text-[#5d25d4] font-sans font-bold tracking-wide">Feature Inactive yet</div>

                     <div className="w-full bg-[#ffffff80] rounded-4xl shadow">
                        <div className="w-full">
                           {eachSettings.headingSettings.map((eachSetting, index ) => {
                              const Icon = eachSetting.icon
                              return(
                                 <div key = {index} className="flex justify-between items-center p-4.5">
                                    {/* Setting details and Icon */}
                                    <div className="flex gap-3 items-center">
                                       <div><Icon color="#8B5CF6" size={22}/></div>
                                       <div className="font-sans md:text-lg">{eachSetting.text}</div>
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
            <div className="flex justify-center w-full mt-10 mb-3"><Button buttonInfo = {buttonInfo}/></div>
            <div className="text-sm text-gray-400">
               Streakflow v0.1.0 (Initial Build)
            </div>
         </div>
      </div>
  );
}