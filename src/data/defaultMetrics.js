import React from 'react';
import {FileCodeCorner, Dumbbell, EyeOff} from "lucide-react";


export const defaultHabits = [{
   habitName: "Coding",
   habitDescription: "",
   habitUnit: "Days",
   habitGoal: {exist: true, value: 30},
   habitIcon: FileCodeCorner,
   habitIconColor: "#5210bc",
   divBackground: "#e9ddff",
   streak: 5,
   entries: [
      {date: "2025-01-18"},
      {date: "2025-01-19"}
   ]
}, {
   habitName: "Exercise",
   habitDescription: "",
   habitUnit: "Days",
   habitGoal: {exist: false, value: 30},
   habitIcon: Dumbbell,
   habitIconColor: "#845403",
   divBackground: "#ffddb7",
   streak: 13,
   entries: [
      {date: "2025-01-18"},
      {date: "2025-01-19"}
   ]
}, {
   habitName: "No Fap",
   habitDescription: "",
   habitUnit: "Days",
   habitGoal: {exist: false, value: 30},
   habitIcon: EyeOff,
   habitIconColor: "#004d46",
   divBackground: "#a1f1e5",
   streak: 0,
   entries: [
      {date: "2025-01-18"},
      {date: "2025-01-19"}
   ]
}]


