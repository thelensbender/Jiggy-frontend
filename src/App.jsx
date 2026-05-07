import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./UserContext"

// Icons
import { } from 'lucide-react';

// Files and Components
import {defaultHabits} from "./data/defaultMetrics";
import WelcomePage from "./Pages/WelcomePage";
import Dashboard from "./Pages/DashboardPage";
import FirstStreak from "./Pages/FirstStreakPage";
import DefineHabit from "./Pages/DefineHabitPage";
import HabitPage from "./Pages/HabitPage";
import LogEntryPage from "./Pages/LogEntryPage";
import ProfilePage from "./Pages/ProfilePage";
import StatPage from "./Pages/StatPage";
import Layout from "./Layout";
import ScrollToTop from "./utils/ScrollBackToTop";
import toast, { Toaster } from "react-hot-toast";


export default function App() {
   // Stores all the habit of the user
   const [habits, setHabits] = useState(defaultHabits);

   // Stores the user Identity(Name or Nickname)
   const [user, setUser] = useState(``);

   const [recentPage, setRecentPage] = useState("")

   // Notification function
   const notify = (notificationMessage, status) => {
      toast[status](notificationMessage, {
         duration: 2000,
         position: 'top-center',

         iconTheme: {
            primary: status === "success" ? "#8B5CF6" : "red",
            secondary: '#fff',
         }
      })
   }

   // Collect input data
   const formFormat = {
      user: "",
      habitData:{
         habitName: "",
         habitDescription: "",
         habitUnit: "",
         habitGoal: {exist: false, value: 0},
         habitIcon: ""
      },
      entries: {
         entryId: crypto.randomUUID(),
         date: new Date().toISOString().split("T")[0],
         duration: 0,
         reflection: ""
      }
   }
   const [form, setForm] = useState(formFormat);

   return (
      <UserContext.Provider value = {{recentPage, setRecentPage,user, setUser, habits, setHabits, defaultHabits, form, setForm, formFormat, notify}}>
         <Toaster />
         <ScrollToTop />
         <Routes>
            <Route path="/" element={<WelcomePage />} /> {/*  Welcome Page. First page the user see */}
            <Route element={<Layout />}>
               <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard Page. For user with an habit data on the website already. */}
               <Route path="/first-streak" element={<FirstStreak />} />  {/* FirstStreak Page. For new users with no habit */}
               <Route path="/define-habit" element={<DefineHabit />} />  {/* FirstStreak Page. For new users with no habit */}
               <Route path="/habit" element={<HabitPage />} />  {/* Habit Page. For user to view the progress of all habit */}
               <Route path="/log-entry/:habitId" element={<LogEntryPage />} />  {/* LogEntry Page. For user to input the progress if an habit */}
               <Route path="/profile" element={<ProfilePage />} />  {/* Profile Page. User info, settings and privacy */}
               <Route path="/stats" element={<StatPage />} />  {/* Stat Page. See weekly progress with visuals (graphs, highest streak, streak history(I'll do this later)) */}
            </Route>
         </Routes>
      </UserContext.Provider>
  );
}