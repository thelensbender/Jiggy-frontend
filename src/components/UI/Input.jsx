

export default function Input({inputInfo}) {
   return (
      <div className=" mt-10">
         {inputInfo.heading && (
            <div className="text-[#746e7c] font-sans">
            {inputInfo.heading}
            </div>
         )}
         {/* Input field */}
         <div className="flex min-w-8/10 justify-center">
            <input placeholder={inputInfo.placeholder} type={inputInfo.type} className="bg-[#f3e6fa] w-full h-12 py-5 px-5 rounded-full text-center placeholder:text-center placeholder-current::placeholder focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"/>
         </div>
      </div>
   )
}
