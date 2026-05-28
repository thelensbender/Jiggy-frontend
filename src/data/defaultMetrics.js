// import {FileCodeCorner, Dumbbell, EyeOff} from "lucide-react";

export const defaultHabits = [{
   habitId: crypto.randomUUID(),
   habitName: "Coding",
   habitDescription: "",
   habitUnit: "Days",
   habitGoal: {exist: true, value: 30},
   habitIcon: "FileCodeCorner",
   habitIconColor: "#5210bc",
   divBackground: "#e9ddff",
   streak: 5,
   entries: [
      {
         entryId: crypto.randomUUID(),
         date: "2026-05-07",
         duration: 45,
         reflection: "Focused well today"
      },
      {
         entryId: crypto.randomUUID(),
         date: "2026-05-08",
         duration: 20,
         reflection: "Very distracted"
      }
   ]
}, {
   habitId: crypto.randomUUID(),
   habitName: "Exercise",
   habitDescription: "",
   habitUnit: "Days",
   habitGoal: {exist: false, value: 30},
   habitIcon: "Dumbbell",
   habitIconColor: "#845403",
   divBackground: "#ffddb7",
   streak: 13,
   entries: [
      {
         entryId: crypto.randomUUID(),
         date: "2026-05-07",
         duration: 45,
         reflection: "Focused well today"
      },
      {
         entryId: crypto.randomUUID(),
         date: "2026-05-08",
         duration: 20,
         reflection: "Very distracted"
      }
   ]
}, {
   habitId: crypto.randomUUID(),
   habitName: "No Fap",
   habitDescription: "",
   habitUnit: "Days",
   habitGoal: {exist: false, value: 30},
   habitIcon: "EyeOff",
   habitIconColor: "#004d46",
   divBackground: "#a1f1e5",
   streak: 0,
   entries: [
      {
         entryId: crypto.randomUUID(),
         date: "2026-05-07",
         duration: 45,
         reflection: "Focused well today"
      },
      {
         entryId: crypto.randomUUID(),
         date: "2026-05-08",
         duration: 20,
         reflection: "Very distracted"
      }
   ]
}]


