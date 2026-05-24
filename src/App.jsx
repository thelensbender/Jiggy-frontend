import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import UserContext from "./UserContext"

// Icons
import { } from 'lucide-react';

// External Functions
import {defaultHabits} from "./data/defaultMetrics";
import {calculateStreak} from "./utils/streakUtils"
import {toISODate} from "./utils/dateUtils"


// Files and Components
import WelcomePage from "./Pages/WelcomePage";
import Dashboard from "./Pages/DashboardPage";
import FirstStreak from "./Pages/FirstStreakPage";
import DefineHabit from "./Pages/DefineHabitPage";
import HabitPage from "./Pages/HabitPage";
import LogEntryPage from "./Pages/LogEntryPage";
import ProfilePage from "./Pages/ProfilePage";
import StatPage from "./Pages/StatPage";
import PersonalInformationPage from "./Pages/PersonalInformationPage";
import SecurityAndPrivacyPage from "./Pages/SecurityAndPrivacyPage";
import Layout from "./Layout";
import ScrollToTop from "./utils/ScrollBackToTop";


export default function App() {
   // Stores all the habit of the user
   const [habits, setHabits] = useState(defaultHabits);

   // Stores the user Information
   const [userInfo, setUserInfo] = useState(
      {
         username: "",
         fullName: "",
         email: "",
         bio: "",
         profilePicture: ""
      }
   );

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
      userInfo: {
         username: "",
         fullName: "",
         email: "",
         bio: ""

      },
      habitData:{
         habitName: "",
         habitDescription: "",
         habitUnit: "",
         habitGoal: {exist: false, value: 0},
         habitIcon: ""
      },
      entries: {
         duration: 0,
         reflection: "",
         entryId: crypto.randomUUID(),
         date: toISODate(new Date())
      }
   }

   // For user password
   const [password, setPassword] = useState(
      {
         currentPassword: "",
         newPassword: "",
         confirmNewPassword: ""
      }
   );

   // This state is used to collect user information, habit information during creation (or editing(I haven't worked on it)) and to log habit.
   const [form, setForm] = useState(formFormat);

   return (
      <UserContext.Provider value = {{userInfo, setUserInfo, habits, setHabits, defaultHabits, form, setForm, formFormat, notify, calculateStreak}}>
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
                  <Route path="/profile/personal-information" element={<PersonalInformationPage />} />  {/* Personal Information Page. For user to edit Full name, username, email address, profile picture, bio.*/}
                  <Route path="/profile/security-and-privacy" element={<SecurityAndPrivacyPage />} />  {/* SecurityAndPrivacy Page. For user to change password, 2FA, Blocked users, privacy, Recent activity.*/}
               <Route/>

               <Route path="/stats" element={<StatPage />} />  {/* Stat Page. See weekly progress with visuals (graphs, highest streak, streak history(I'll do this later)) */}
            </Route>
         </Routes>
      </UserContext.Provider>
  );
}