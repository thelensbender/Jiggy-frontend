   // const buttonInfo = [
   // {
   //    text: "Mark as Done",
   //    icon: Check,
   //    backgroundColor: "#8B5CF6",
   //    textColour: "white"
   // }]

export default function Button({buttonInfo}) {
   const Icon = buttonInfo.icon;
  return (
   <div className="w-full">
      {/* Add habit button */}
      <div style={{backgroundColor: buttonInfo.backgroundColor}} className="flex justify-center items-center py-4 w-full rounded-full gap-2 shadow-lg ">
         {buttonInfo.icon && <Icon  color={buttonInfo.textColour} size={23} />}
         <p style={{color:buttonInfo.textColour}} className="text-base font-sans font-bold text-white">{buttonInfo.text}</p>
      </div>
   </div>
  )
}
