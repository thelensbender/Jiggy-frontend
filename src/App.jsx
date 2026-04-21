import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";

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
      <>
         <WelcomeScreen></WelcomeScreen>
      </>
  );
}