import React from 'react';
import {FileCodeCorner, Dumbbell, EyeOff} from "lucide-react";


export const defaultHabits = [{
   id: "metric-1",
   name: "Coding",
   unit: "Days",
   icon: FileCodeCorner,
   iconColor: "#5210bc",
   divBackground: "#e9ddff",
   streak: 5,
   goal: {exist: true, value: 30},
   entries: [
      {date: "2025-01-18"},
      {date: "2025-01-19"}
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
      {date: "2025-01-18"},
      {date: "2025-01-19"}
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
      {date: "2025-01-18"},
      {date: "2025-01-19"}
   ]
}]


