import { useState } from "react";
import  TextWithLogo from "./assets/Logos/Colored Icon and Text.png";

export default function App() {
   // defaultMetrics is a variable of dummy values
   const defaultMetrics = [{
      id: "metric-1",
      name: "Exercise",
      unit: "Days",
      streak: 5,
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: true}
      ]
   }, {
      id: "metric-2",
      name: "Coding Practice",
      unit: "Days",
      streak: 13,
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: true}
      ]
   }, {
      id: "metric-3",
      name: "Prayer",
      unit: "Days",
      streak: 0,
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: false}
      ]
   }]
   const [metrics, setMetrics] = useState(defaultMetrics);

   return (
      // Main div
      <div className="w-full fixed">
         <div className=" flex items-center justify-between px-3">
            <div className="w-40"><img className="w-full" src={TextWithLogo} alt="Streakflow Logo" /></div> {/* Logo  */}
            <div className="rounded-full h-13 w-13 bg-[#8B5CF6]"></div> {/* User Icon */}
         </div>
      </div>
  );
}