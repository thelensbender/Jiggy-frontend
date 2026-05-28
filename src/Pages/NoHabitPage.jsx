import astronutPicture from "../assets/Images/floating_guy.png"
export default function NoHabitPage() {
  return (
    <div className="flex flex-col items-center justify-center mb-3">
         <img src={astronutPicture} className="flex w-100" alt="" />
         <div className="font-sans text-2xl">No Habit Yet</div>
    </div>
  )
}
