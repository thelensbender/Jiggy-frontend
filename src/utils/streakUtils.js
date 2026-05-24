import { toISODate, diffInDays } from "../utils/dateUtils";

export const calculateStreak = (entries) => {
   // Confirm if user logged any entry yet
   if(entries.length === 0) {
      return 0;
   }

   // If an entry exists...
   // Sort the logs first
   const sorted = [...entries].sort((a, b) =>
      new Date(b.date) - new Date(a.date)
   )
   const todayDate = toISODate(new Date());
   const mostRecent = sorted[0];

   const dayDiff = diffInDays(mostRecent.date, todayDate);
   let streak = 1;

   if(dayDiff === 0 || dayDiff === 1) {
      for (let i = 1; i < sorted.length; i++) {
         let day = sorted[i - 1].date;
         let dayBefore = sorted[i].date;

         let streakCalc = diffInDays(day, dayBefore);
         if(streakCalc === 1) {
            streak++;
         } else {
            return streak;
         }
      }
      return streak;
   } else { //Entry exists but broken streak
      return 0;
   }



}