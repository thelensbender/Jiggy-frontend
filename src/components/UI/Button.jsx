   // const buttonInfo = [
   // {
   //    text: "Mark as Done",
   //    icon: Check,
   //    backgroundColor: "#8B5CF6",
   //    textColour: "white"
   // }]

export default function Button({buttonInfo, onClick, disabled}) {
   const Icon = buttonInfo.icon;
  return (
   <div className="flex justify-center items-center w-5/6 md:w-full">
      {/* button */}
      <div
      onClick = {onClick}
      disabled = {disabled}
      style={{backgroundColor: buttonInfo.backgroundColor}} className="cursor-pointer flex justify-center items-center py-4 w-full rounded-full gap-2 shadow">
         {buttonInfo.icon && <Icon  color={buttonInfo.textColour} size={23} />}
         <button type="submit" disabled = {disabled} style={{color:buttonInfo.textColour}} className="cursor-pointer text-base font-sans font-bold text-white">{buttonInfo.text}</button>
      </div>
   </div>
  )
}
