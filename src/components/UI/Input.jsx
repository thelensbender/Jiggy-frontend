
   // const inputInfos = [{
   //    label: "short",
   //    placeholder: "0",
   //    type: "number",
   //    name: "habitName",
   //    heading: "Duration (Minutes)",
   //    required: true,
   //    options: [
   //       { label: "", value: "" },
   //       { label: "", value: "" }
   //    ]
   // },
   // {
   //    label: "short",
   //    placeholder: "How did it go?",
   //    type: "text",
   //    heading: "Reflection",
   //    required: true,
   //    options: [
   //       { label: "", value: "" },
   //       { label: "", value: "" }
   //    ]
   // }]
import {useContext} from "react";
import UserContext from "../../UserContext";

export default function Input({inputInfo}) {
   const { form, setForm } = useContext(UserContext);
   const getValue = (name) => {
      // For habit goal only
      if (name === "habitGoal") {
         return form.habitData.habitGoal?.value || "";
      }
      //  For user input only
      if (name === "user") {
         return form.user || "";
      }

      // For habit log, for taking in duration and reflection
      if (name === "duration" || name === "reflection") {
         return form.entries[name] || "";
      }

      //  For general input collection
      return form.habitData[name] || "";
   };
   return (
      <div>
         {inputInfo.map((EachInputInfo) => {
            return (
               <div key={EachInputInfo.name} className=" mt-10">
                  {/* Input heading */}
                  {EachInputInfo.heading && (
                     <div className="flex text-[#746e7c] text-xs font-sans tracking-widest">
                     {EachInputInfo.heading}
                     {EachInputInfo.required &&(
                        <div className="text-sm ml-1 text-red-700">*</div>
                     )}
                     </div>
                  )}

                  {/* Input field */}
                  <div className="flex mt-3 min-w-8/10 justify-center">

                     {/* Input for Text*/}
                     {EachInputInfo.type !== "radio" ? (
                        EachInputInfo.label === "long" ? (
                           // Long text area
                           <textarea
                              placeholder={EachInputInfo.placeholder}
                              type={EachInputInfo.type}
                              onChange={(e) => {
                                 // For collecting habit log
                                 if (EachInputInfo.name === "reflection") {
                                    setForm((prev) => {
                                       return {...prev,
                                          entries: {...prev.entries,
                                             [EachInputInfo.name]: e.target.value
                                          }
                                       }
                                    });
                                 }

                                 // For collecting habit data(Habit description)
                                 if(EachInputInfo.name === "habitDescription") {
                                    setForm((prev) => {
                                       return {...prev,
                                          habitData:{...prev.habitData,
                                             [EachInputInfo.name]: e.target.value
                                          }
                                       }
                                    });
                                 }

                              }}

                              onInput={(e) => {
                                 e.target.style.height = "auto";
                                 e.target.style.height = e.target.scrollHeight + "px";
                                 }}
                              value={getValue(EachInputInfo.name)  || ""}
                              className="bg-[#f3e6fa] rounded-md scrollbar-hide w-full py-5 px-5 font-sans text-center placeholder:text-center placeholder-current::placeholder focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"/>
                        )
                           :
                           // Short input area or number
                           (
                              <input
                                 placeholder={EachInputInfo.placeholder}
                                 type={EachInputInfo.type}
                                 onChange={(e) => {
                                    // For habit goal object inside the habitData object
                                    if (EachInputInfo.name === "habitGoal") {
                                       setForm((prev) => {
                                          return {...prev,
                                             habitData: {...prev.habitData,
                                                habitGoal: {
                                                ...prev.habitData.habitGoal,
                                                value: e.target.value
                                                }
                                             }
                                          }
                                       });

                                       // For user input
                                    }  else if (EachInputInfo.name === "user") {
                                       setForm(
                                          (prev) => {return {
                                             ...prev,
                                             user: e.target.value
                                          }}
                                       )
                                       // For habit log(duration)
                                    } else if (EachInputInfo.name === "duration") {
                                       setForm((prev) => {
                                          return {...prev,
                                             entries: {...prev.entries,
                                                [EachInputInfo.name]: Number(e.target.value)
                                             }
                                          }
                                       });
                                    } else {
                                          setForm((prev) => { // For full habit definition
                                             return {...prev, habitData:{...prev.habitData, [EachInputInfo.name]: e.target.value}}
                                          });
                                       }
                                 }}
                                 value={getValue(EachInputInfo.name)   || "" }
                                 className="bg-[#f3e6fa] rounded-md overflow-hidden w-full h-12 py-5 px-5 font-sans text-center  placeholder:text-center placeholder-current::placeholder focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"/>
                           )

                     ) : (
                           <div className="flex w-full justify-between mt-3">

                              {/* Radio buttons */}
                              {EachInputInfo.options?.map((EachOption, i) => {
                                 return (
                                    <div key={i}>
                                       <label
                                          className={`px-18 py-5 rounded-full cursor-pointer text-lg border ${form.habitData[EachInputInfo.name] === EachOption.value ? "bg-[#8B5CF6] text-white" : "bg-white text-[#746e7c]"}`}
                                          onClick={() => setForm(
                                             (prev) => {
                                                return {...prev, habitData: {...prev.habitData, [EachInputInfo.name]: EachOption.value}}
                                             }
                                          )}>
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
