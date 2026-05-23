
   // const ElementInfo = {
   //    icon: User ,
   //    header : "Ijinleifeoluwa Shadare",
   //    info: "@thelensbender • Pro Member"
   // }

export default function ElementHeader({elementInfo}) {
   const Icon = elementInfo.icon;
   return (
      <>
         <div className="flex flex-col items-center">
            <div  className="relative flex">
               <div style={elementInfo.style ? elementInfo.style : {}} className="flex justify-center items-center rounded-full h-18 w-18 bg-[#8B5CF6] mt-10 shadow-lg"><Icon color="white" size={35}></Icon></div> {/* Circle div */}
               {elementInfo.editable.status && <button className="absolute bottom-0 right-1 flex justify-center items-center bg-white rounded-full w-10 h-10 shadow cursor-pointer"><elementInfo.editable.icon size={20} color="#8B5CF6"/></button>}
            </div>
            { elementInfo.header && <div className="text-4xl text-center font-bold font-sans mt-5">{elementInfo.header}</div>}
            {elementInfo.info && <div className="text-[#746e7c] font-sans mt-2">{elementInfo.info}</div>} {/* Consistency score. Remember to make it dynamic. */}
            {elementInfo.info2 && <div className="text-[#746e7c] font-mono mt-1">{elementInfo.info2}</div>}
         </div>
      </>
   )
}
