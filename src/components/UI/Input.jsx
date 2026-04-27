
   // const inputInfos = [{
   //    label: "short",
   //    placeholder: "0",
   //    type: "number",
   //    heading: "Duration (Minutes)",
   //    options: [
   //       { label: "", value: "" },
   //       { label: "", value: "" }
   //    ]
   // },
   // {
   //    label: "short",
   //    placeholder: "How did it go?",
   //    type: "text",
   //    heading: "Reflection"
   //    options: [
   //       { label: "", value: "" },
   //       { label: "", value: "" }
   //    ]
   // }]

export default function Input({inputInfo}) {
   return (
      <div>
         {inputInfo.map((EachInputInfo, i) => {
            return (
               <div key={i} className=" mt-10">
                  {/* Input heading */}
                  {EachInputInfo.heading && (
                     <div className="text-[#746e7c] text-xs font-sans tracking-widest">
                     {EachInputInfo.heading}
                     </div>
                  )}

                  {/* Input field */}
                  <div className="flex mt-3 min-w-8/10 justify-center">
                     {EachInputInfo.type !== "radio" ? (
                        <input
                           placeholder={EachInputInfo.placeholder}
                           style={(EachInputInfo.label === "long" && EachInputInfo.type === "text") ? {height: "8vw", borderRadius: "0.375rem"} : {height: "50px"}}
                           type={EachInputInfo.type}
                           className="bg-[#f3e6fa] w-full h-12 py-5 px-5 text-center placeholder:text-center placeholder-current::placeholder focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"/>

                     ) : (
                           <div className="flex w-full justify-between mt-3">
                              {EachInputInfo.options?.map((EachOption, i) => {
                                 return (
                                    <div key={i}>
                                       <label
                                          className="px-18 py-5 rounded-full cursor-pointer border bg-[#8B5CF6] text-white text-lg">
                                          <input
                                             type={EachInputInfo.type}
                                             className="hidden"/>
                                          {EachOption.label}
                                       </label>
                                    </div>
                                 )
                              })}
                           </div>
                        )
                     }
                  </div>
               </div>
            )
         })}
      </div>
   )
}
