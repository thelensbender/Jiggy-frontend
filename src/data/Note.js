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
      placeholder: "0",
      type: "number",
      heading: "Duration (Minutes)"
   },
   {
      placeholder: "How did it go?",
      type: "text",
      heading: "Reflection"
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