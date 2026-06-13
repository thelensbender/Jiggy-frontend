import  TextWithLogo from "../../assets/Logos/jiggy_Purple-t.png";

export default function TopNavBar() {
   return (
      // Main div
      <div className="w-full fixed backdrop-filter backdrop-transparent backdrop-blur-md z-10">
         <div className=" flex items-center justify-start px-3">
            <div className="w-25 md:w-40"><img draggable="false" className="w-full" src={TextWithLogo} alt="Streakflow Logo" /></div> {/* Logo  */}
         </div>
      </div>
  )
}