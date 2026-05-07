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
      id: "metric-2",
      name: "Exercise",
      unit: "Days",
      icon: Dumbbell,
      iconColor: "#845403",
      divBackground: "#ffddb7",
      streak: 13,
      goal: {exist: false, value: 30},
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
      id: "metric-3",
      name: "No Fap",
      unit: "Days",
      icon: EyeOff,
      iconColor: "#004d46",
      divBackground: "#a1f1e5",
      streak: 0,
      goal: {exist: false, value: 30},
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
      name: "dayDuration",
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
      heading: "Reflection",
      name: "dayReflection",
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















