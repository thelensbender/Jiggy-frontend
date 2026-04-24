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







export default function App() {

   const [habits, setHabits] = useState(defaultHabits);

   return (
      // Main div
      <Routes>
         {/* <Route path="/" element={<WelcomePage />} /> */}
         {/* <Route path="/" element={<Dashboard />} /> */}
         {/* <Route path="/" element={<FirstStreak />} /> */}
         {/* <Route path="/" element={<HabitPage Habit={habit} />} /> */}
         {/* <Route path="/" element={<LogEntryPage/>} /> */}
         {/* <Route path="/" element={<ProfilePage/>} /> */}
         {/* <Route path="/" element={<StatPage/>} /> */}
         <Route path="/" element={<StatPage/>} />
      </Routes>
  );
}