import  TextWithLogo from "../../assets/Logos/ColoredIconandText.png";

export default function TopNavBar() {
   return (
      // Main div
      <div className="w-full fixed backdrop-filter backdrop-transparent backdrop-blur-md z-10">
         <div className=" flex items-center justify-between px-3">
            <div className="w-35 md:w-40"><img className="w-full" src={TextWithLogo} alt="Streakflow Logo" /></div> {/* Logo  */}
            <div className="rounded-full h-10 w-10 md:h-13 md:w-13 bg-[#8B5CF6]"></div> {/* User Icon */}
         </div>
      </div>
  )
}