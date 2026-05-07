import { User, ShieldCheck } from 'lucide-react';

export default function CircleIcon({circleIconInfo}) {
   const Icon = circleIconInfo.icon;
   return (
      <div>
         <div style={{backgroundColor: circleIconInfo.bgColor}} className="rounded-full h-12 w-12 flex items-center justify-center"><Icon color={circleIconInfo.iconColor}/></div> {/* User Icon */}
      </div>
   )
}
