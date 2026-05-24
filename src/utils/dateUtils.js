// Convert the date to this format : "YYYY-MM-DD"
export const toISODate = (date) => {
   return date.toISOString().split("T")[0];
}

// Calculate the difference between 2 dates.
export const diffInDays = (dateA, dateB) => {
   const date1 = new Date(dateA);
   const date2 = new Date(dateB);
   const timeDiff = Math.abs(date2.getTime() - date1.getTime());

   const dayDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));
   return dayDiff;
}