
export default function ElementHeader({elementInfo}) {
   const Icon = elementInfo.Icon;
   return (
      <div  className="flex flex-col items-center">
         <div className="flex justify-center items-center rounded-full h-18 w-18 bg-[#8B5CF6] mt-10 shadow-lg"><Icon color="white" size={35}></Icon></div> {/* Bolt div */}
         <div className="text-4xl font-bold font-sans mt-5">{elementInfo.Header}</div>
         <div className="text-[#746e7c] font-sans mt-2">{elementInfo.Info}</div> {/* Consistency score. Remember to make it dynamic. */}
      </div>
   )
}
