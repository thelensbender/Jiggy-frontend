import {useContext} from "react";
import UserContext from "../Context/UserContext";

import { ChartColumnIncreasing, Flame, ClockArrowUp, ClockFading, ChevronRight, Medal, Lock , Milestone} from 'lucide-react';
import ElementHeader from '../components/UI/ElementHeader';
import CircleIcon from "../components/UI/CircleIcon.jsx";
import comingSoon from "../assets/Images/coming_soon.png"


export default function StatTab() {
   const { achievement } = useContext(UserContext);

   const ElementInfo = {
      icon: "ChartColumnIncreasing",
      header : "Weekly Progress",
      info: "Consistency Score: 94%",
      editable: {status: false, icon: ""}
   }

   // Streak history section data
   const streakHistory = [
      {
         id: "history-1",
         objID: "history",
         historyTitle: "Perfect Week",
         historySubTitle: "No data",
         // historySubTitle: "Oct 12 - Oct 19",
         icon: Flame,
         iconColor: '#743CDA',
         bgColor: "#e9ddff",
         historyDetails: {days: "0 day", status: "Not started"},
         // historyDetails: {days: "7 days", status: "COMPLETED"}
      },
      {
         id: "history-2",
         objID: "history",
         historyTitle: "Long Run",
         historySubTitle: "No data",
         // historySubTitle: "Oct 12 - Oct 19",
         icon: ClockArrowUp,
         iconColor: "#743CDA",
         bgColor: "#e9ddff",
         historyDetails: {days: "0 day", status: "Not started"}
         // historyDetails: {days: "21 days", status: "ENDED"}
      },
      {
         id: "history-3",
         objID: "history",
         historyTitle: "Quick Start",
         historySubTitle: "No data",
         // historySubTitle: "Oct 12 - Oct 19",
         icon: ClockFading,
         iconColor: "#743CDA",
         bgColor: "#e9ddff",
         historyDetails: {days: "0 day", status: "Not started"}
         // historyDetails: {days: "3 days", status: "ENDED"}
      }
   ]


   // NFT Achievement section data
   const nftAchievement = [
      {
         id: "bronze",
         objID: "achievement",
         achievementTitle: "Bronze",
         achievementSubTitle: "7 days",
         target: 5,
         icon: Lock,
         iconColor: '#743CDA',
         bgColor: "#e9ddff"
      },
      {
         id: "silver",
         objID: "achievement",
         achievementTitle: "Silver",
         achievementSubTitle: "30 days",
         target: 30,
         icon: Lock,
         iconColor: "#743CDA",
         bgColor: "#e9ddff"
      },
      {
         id: "gold",
         objID: "achievement",
         achievementTitle: "Gold",
         achievementSubTitle: "100 days",
         target: 100,
         icon: Lock,
         iconColor: "#743CDA",
         bgColor: "#e9ddff"
      }
   ].map(eachAchievement => ({
      ...eachAchievement,
      achievementStatus: achievement.activeStreak >= eachAchievement.target
   }))

   const nextMilestone = () => {
      const NextMilestone = nftAchievement.find(m => achievement.activeStreak < m.target)
      return NextMilestone;
   }

   return (
      // Main div
      <div className="flex justify-center">
         {/* Elements div */}
         <div className="flex flex-col items-center gap-10 md:gap-14">
            {/* Header */}
            <div  className="flex flex-col items-center">
               <ElementHeader elementInfo={ElementInfo} />
            </div>
            {/* Active and best streak count */}
            <div className="flex gap-8 md:gap-12 items-center justify-between">
               <div className="flex flex-col justify-center bg-white p-5 w-30 h-30 md:w-55 rounded-lg shadow">
                  <div className="text-base md:text-lg text-[#494454] font-sans font-bold tracking-widest">Active Streak</div>
                  <div className="flex items-end gap-1">
                     <div className="text-[#743cda] text-2xl md:text-3xl font-medium font-sans">{achievement.activeStreak}</div>
                     <div>{achievement.activeStreak === 0 ? "day" : "days"}</div>
                  </div>
               </div>
               <div className="flex flex-col justify-center bg-white p-5 rounded-lg shadow w-30 h-30 md:w-50">
                  <div className="text-base md:text-lg text-[#494454] font-sans font-bold tracking-widest">Best Streak</div>
                  <div className="flex items-end gap-1">
                     <div className="text-[#845403] text-2xl md:text-3xl font-medium font-sans">{achievement.bestStreak}</div>
                     <div>days</div>
                  </div>
               </div>
            </div>


            {/* GRAPH SPACE */}
            <div className="w-full flex flex-col justify-center items-start">
               <div className="text-sm font-sans font-semibold tracking-widest md:text-lg">Graphical Daily Activities</div>
               <div className='floating flex w-100 md:w-130'><img src={comingSoon} alt="" className='w-full'/></div>
            </div>

            {/* Streak history */}
            <div className="w-full flex flex-col justify-center items-start">
               <div className="text-sm font-sans font-semibold tracking-widest md:text-lg">Streak History</div>
               <div className="flex flex-col gap-5 w-full mt-5">
                  {streakHistory.map((eachHistory, i) =>{
                     return (
                        <div
                           key={i}
                           className="flex items-center justify-between w-full py-2 px-2 md:py-3 md:px-5 bg-[#ece3f494] rounded-full transition-all duration-200 hover:shadow-xl">
                           <div className="flex items-center justify-center gap-6 w-full">
                              <CircleIcon key = {eachHistory.id} circleIconInfo = {eachHistory}/>
                              <div className="w-full">
                                 <div className="text-[#1d1a23] font-semibold text-base md:text-lg">{eachHistory.historyTitle}</div>
                                 <div className="flex items-center text-[#717171] text-xs md:text-base gap-1">{eachHistory.historySubTitle}</div>
                              </div>
                           </div>
                           <div className="flex flex-col justify-center items-end">
                              <div style={{color: eachHistory.historyDetails.status === 'COMPLETED' ? '#7741f5' : 'black'}} className="text-base font-semibold text-[#743CDA] text-nowrap">{eachHistory.historyDetails.days}</div>
                              <div className="text-xs text-[#717171] text-nowrap">{eachHistory.historyDetails.status}</div>
                           </div>
                        </div>
                     )})
                  }
               </div>
            </div>

            {/* NFT Milestone Progress */}
            <div className="w-full flex flex-col justify-center items-start">
               <div className="text-sm font-sans font-semibold tracking-widest md:text-lg">NFT Milestone Progress</div>
               <div className="flex flex-col items-center relative rounded-md w-full bg-[#fffdff] py-5 px-3 md:px-5 group mt-5 gap-3">
                  <div className="flex items-center justify-between w-full gap-5">
                     <div className="flex gap-3 items-center">
                        {/* Icon circle background */}
                        <div className="flex justify-center items-center bg-[#e9ddff] rounded-full h-13 w-13 lg:h-16 lg:w-16"><Medal color={'#743CDA'} size={25}/></div>
                        <div>
                           <div className="text-[#1d1a23] font-semibold text-base md:text-lg">{nextMilestone().achievementTitle} Milestone</div>
                           <div className="text-base text-[#717171] text-nowrap">{achievement.activeStreak}/{nextMilestone().target} days</div>
                        </div>
                     </div>
                     
                     {/* Progress percent */}
                     <div className="flex justify-center text-sm items-center w-12 h-7 rounded-full bg-[#d8c3ff]">{Math.round((achievement.activeStreak/nextMilestone().target)*100)}%</div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                     <div className={`${(Math.round((achievement.activeStreak/nextMilestone().target)*100) === 0) ? "" : "glow"} h-2 rounded-full`} style={{ width: `${Math.round((achievement.activeStreak/nextMilestone().target)*100)}%`, backgroundColor: "#743CDA" }}></div>
                  </div>
                  <div className="font-semibold text-sm md:text-base text-[#717171] text-nowrap">{nextMilestone().target - achievement.activeStreak} {(nextMilestone().target - achievement.activeStreak) > 1 ? "days" : "day"} until {nextMilestone().achievementTitle} NFT unlock</div>
               </div>
            </div>

            {/* NFT Achievements */}
            <div className="w-full flex flex-col justify-center items-start">
               <div className="text-sm font-sans font-semibold tracking-widest md:text-lg">NFT Achievements</div>
               {/* Achievements badges */}
               <div className="flex gap-3 mt-5">
                  {nftAchievement.map((eachAchievement, i) => {
                     return (
                        <div key = {i} className={`flex flex-col justify-center items-center shadow-xl px-10 py-3 rounded-2xl ${eachAchievement.achievementStatus === true ? " glow opacity-100" : "opacity-50"} ${eachAchievement.achievementStatus === true ? "border border-gray-300" : ""} `}>
                           <div><CircleIcon circleIconInfo ={eachAchievement}/></div>
                           <div  className="text-[#1d1a23] font-semibold text-base md:text-lg">{eachAchievement.achievementTitle}</div>
                           <div className="flex items-center text-[#717171] text-xs md:text-base gap-1">{eachAchievement.achievementSubTitle}</div>
                        </div>
                     )
                  })}
               </div>
               
            </div>
         </div>
      </div>
   )
}
