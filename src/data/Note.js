const defaultHabits = [{
      id: "metric-1",
      name: "Coding",
      unit: "Days",
      icon: FileCodeCorner,
      iconColor: "#5210bc",
      divBackground: "#e9ddff",
      streak: 5,
      goal: {exist: true, value: 30},
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: true}
      ]
   }, {
      id: "metric-2",
      name: "Exercise",
      unit: "Days",
      icon: Dumbbell,
      iconColor: "#845403",
      divBackground: "#ffddb7",
      streak: 13,
      goal: {exist: false, value: 30},
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: true}
      ]
   }, {
      id: "metric-3",
      name: "No Fap",
      unit: "Days",
      icon: EyeOff,
      iconColor: "#004d46",
      divBackground: "#a1f1e5",
      streak: 0,
      goal: {exist: false, value: 30},
      entries: [
         {date: "18-01-2005", completed: true},
         {date: "19-01-2005", completed: false}
      ]
   }]
   const [habit, setMetrics] = useState(defaultHabits);

   const ElementInfo = {
      Icon: Dumbbell,
      Header : "Daily Strength",
      Info: "Log your progress for today"
   }
   const [elementInfo, setElementInfo] = useState(ElementInfo);

   const inputInfos = [{
      label: "short",
      placeholder: "0",
      type: "number",
      heading: "Duration (Minutes)",
      options: [
         { label: "", value: "" },
         { label: "", value: "" }
      ]
   },
   {
      label: "short", // Short or long
      placeholder: "How did it go?",
      type: "text",
      heading: "Reflection"
      options: [
         { label: "Days", value: "days" },
         { label: "Hours", value: "hours" }
      ]
   }]

   const week = ["M", "T", "W", "T", "F", "S", "S"];

   const buttonInfo = [
      {
         text: "Mark as Done",
         icon: Check,
         backgroundColor: "#8B5CF6",
         textColour: "white"
      },
      {
         text: "Skip for today",
         icon: Check,
         backgroundColor: "white",
         textColour: "#746e7c"

      }]















import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Icons
import { } from 'lucide-react';

// Files and Components
import {defaultHabits} from "./data/defaultMetrics";
import WelcomePage from "./Pages/WelcomePage";
import Dashboard from "./Pages/DashboardPage";
import FirstStreak from "./Pages/FirstStreakPage";
import HabitPage from "./Pages/HabitPage";
import LogEntryPage from "./Pages/LogEntryPage";
import ProfilePage from "./Pages/ProfilePage";
import StatPage from "./Pages/StatPage";
import Layout from "./Layout";


export default function App() {

   const [habits, setHabits] = useState(defaultHabits);

   return (
      <Routes>
         <Route path="/" element={<WelcomePage />} />  {/* Welcome Page. First page the user see */}
         <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard  habits={habits} />} />   {/* Dashboard Page. For user with an habit data on the website already. */}
            <Route path="/first-streak" element={<FirstStreak />} />   {/* FirstStreak Page. For new users with no habit */}
            <Route path="/habit" element={<HabitPage habits={habits} />} />   {/* Habit Page. For user to view the progress of all habit */}
            <Route path="/log-entry/:id" element={<LogEntryPage/>} />   {/* LogEntry Page. For user to input the progress if an habit */}
            <Route path="/profile" element={<ProfilePage/>} />   {/* Profile Page. User info, settings and privacy */}
            <Route path="/stats" element={<StatPage/>} />   {/* Stat Page. See weekly progress with visuals (graphs, highest streak, streak history(I'll do this later)) */}
         </Route>
      </Routes>
  );
}