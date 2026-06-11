import { User, ShieldCheck, Lock, CircleCheck } from 'lucide-react';

export default function CircleIcon({circleIconInfo}) {
   // Select the correct achievement icon: Lock icon or check icon
   const chooseIcon = () => {
      if (circleIconInfo?.objID === "achievement") {
         return circleIconInfo.achievementStatus === true ? CircleCheck : Lock;
      }
      return circleIconInfo.icon;
   };
   const Icon = chooseIcon();

   // Select the correct icon color
   const bgIconColor = () => {
      if (circleIconInfo?.objID === "history") {
         return circleIconInfo.historyDetails.status === "COMPLETED" ? "#743CDA" : "black";
      }
      if (circleIconInfo?.objID === "achievement") {
         return circleIconInfo.achievementStatus === true ? "#743CDA" : "black";
      }
      return circleIconInfo.iconColor;
   };

   return (
      <div >
         <div
         style={{backgroundColor: circleIconInfo.bgColor}}
         className="rounded-full h-12 w-12 flex items-center justify-center">
            <Icon
            color={bgIconColor()}/></div> {/* User Icon */}
      </div>
   )
}
