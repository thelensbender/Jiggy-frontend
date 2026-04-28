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