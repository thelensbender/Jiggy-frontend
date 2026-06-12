import { useState } from "react";
import {useContext} from "react";
import UserContext from "../Context/UserContext.js";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";

import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config";
import { Contract } from "ethers";
import { useWallet } from "../Context/WalletContext";

// Icons
import { Check, Dumbbell, ArrowLeft, Calendar } from 'lucide-react';
import confetti from "canvas-confetti";

// Components
import ElementHeader from "../components/UI/ElementHeader.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import ConfirmLayout from "../components/Layout/ConfirmLayout.jsx";

export default function LogEntry() {
   const [showConfirm, setShowConfirm] = useState(false);
   const [milestoneModal, setMilestoneModal] = useState(null);
   const { provider, walletAddress } = useWallet();

   const { habits, setHabits, form, notify, calculateStreak } = useContext(UserContext);
   const navigate = useNavigate();


   // To display the right habit details
   const { habitId } = useParams();

   // Find the exact habit usind the habitId
   const findHabit = habits.find(h => h.habitId === habitId);
   const habitName = findHabit.habitName;

   const elementInfo = {
      icon: findHabit?.habitIcon,
      header : habitName.length > 30 ? ( habitName.slice(0, 30) + "...") : habitName,
      info: "Log your progress for today",
      editable: {status: false, icon: ""}
   }

   const inputInfos = [{
      label: "short",
      placeholder: "0",
      type: "number",
      name: "duration",
      required: false,
      heading: "DURATION (MINUTES) (optional)",
      options: []
   },
   {
      label: "long",
      placeholder: "How did it go?",
      type: "text",
      name: "reflection",
      required: false,
      heading: "Reflection (optional)",
      options: []
   }]

   const week = ["M", "T", "W", "T", "F", "S", "S"];
   const habitLog = {...form.entries};
   async function mintNFT(streakLevel) {
      const signer = await provider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.mintNft(walletAddress, streakLevel);
      await tx.wait();
   }

   const buttonInfoLog = [
      {
         text: "Mark as Done",
         icon: Check,
         backgroundColor: "#8B5CF6",
         textColour: "white",
         onClick: async ()=> {
            let milestoneHit = null;
                     setHabits((prev) => {
                        return prev.map((habit) => {
                           if(habit.habitId === habitId) {
                              if(habitLog === habit.entries[habit.entries.length - 1]) {
                                 notify(`Logged for the day!`, "success");
                                 navigate("/habit");
                                 return habit;
                              }
                              const newentry = [...habit.entries, habitLog];
                              const newStreak = calculateStreak(newentry);

                              if (newStreak === 7 || newStreak === 30 || newStreak === 100) {
                                 milestoneHit = newStreak;
                              }
                              return {...habit,
                                 entries: newentry,
                                 streak: calculateStreak(newentry)
                              }
                           }
                              return habit;
                        })
                     });
                     if (milestoneHit) {
                        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });

                        try {
                           const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, await provider.getSigner());
                           const alreadyMinted = await contract._hasMinted(walletAddress, milestoneToLevel(milestoneHit));

                           if (!alreadyMinted) {
                              setMilestoneModal(milestoneHit); // "You won an NFT!" modal
                              await mintNFT(milestoneHit);
                           } else {
                              notify(`You hit a ${milestoneHit}-day streak again! 🔥`, "success");
                           }
                        } catch (err) {
                           console.error("Mint check/mint failed:", err);
                        }
                     }
                     if (milestoneHit)
                     notify(`You are amazing!`, "success");
                     setTimeout(() => {
                        navigate("/habit");
                     }, 1000);
                  }
      },
      {
         text: "Skip for today",
         icon: "",
         backgroundColor: "white",
         textColour: "#746e7c",
         onClick: () => {
            setShowConfirm(true);
         }

      }
   ]


   // The details of the confirmation pop-up
   const confirmDetails ={
      icon: Calendar,
      header : "Skip for Today?",
      info: (habitName) =>(
            <>
               You're about to skip<span className='text-[#8B5CF6]  font-bold'> {habitName.length > 20 ? ((habitName).slice(0, 20) + "...") : habitName} </span>for today. Skipping will <strong>break</strong> your current streak. Are you sure?
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
            text: "Yes, skip today",
            backgroundColor: "#8B5CF6",
            textColour: "white",
            onClick: () => {
               setHabits((prev) => {
                  return prev.map((habit) => {
                     if(habit.habitId === habitId) {
                        if(habitLog === habit.entries[habit.entries.length - 1]) {
                           notify(`Logged for the day!`, "success");
                           navigate("/habit");
                           return habit;
                        }
                        const newentry = [
                           ...habit.entries, habitLog
                        ]
                        return {...habit,
                           entries: newentry,
                           streak: 0
                        }
                     }
                        return habit;
                  })
               });
               notify(`Skipped ${habitName.length > 20 ? ((habitName).slice(0, 20) + "...") : habitName} for today`, "success");
               navigate("/habit");
            }
         }
      ]
   }

   return (
      // Main div
      <>
         {showConfirm && (
            <ConfirmLayout confirmDetails = {confirmDetails} habit = {findHabit} setShowConfirm = {setShowConfirm} />
         )}
         <div className="flex items-center justify-center pb-20">
            {/* Elements div */}


            <div className="flex flex-col mb-13">
               {/* Element Header */}
               <ElementHeader elementInfo={elementInfo}/>

               {/* A week progress(Show from Monday to Sunday) */}
               <div className="flex w-full justify-between mt-10">
                  {week.map((day, i) =>{
                     return (
                        <div key={i} className="flex flex-col gap-1 items-center">
                           <div className="text-xs text-[#746e7c] font-sans">{day}</div>
                           <div className="flex justify-center items-center rounded-full h-8 w-8 bg-white border-2 border-[#8B5CF6]"><Check size={20} color="#8B5CF6"/></div>
                        </div>
                     )
                  })}
               </div>
               {/* Input field */}
               <div className="mt-10 w-full rounded-3xl bg-white px-10  pb-10">
                     <Input inputInfo={inputInfos}/>
               </div>
               {/* Buttons */}
               <div className="flex flex-col items-center gap-3 w-full mt-10">
                  {buttonInfoLog.map((buttonInfo, i) =>{
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
      </>
  );
}