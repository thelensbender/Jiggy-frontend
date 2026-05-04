
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
                        <div className="text-xs text-red-700">*</div>
                     )}
                     </div>
                  )}

                  {/* Input field */}
                  <div className="flex mt-3 min-w-8/10 justify-center">

                     {/* Input for Text */}
                     {EachInputInfo.type !== "radio" ? (
                        EachInputInfo.label === "long" ? (
                           // Long text area
                           <textarea
                              placeholder={EachInputInfo.placeholder}
                              type={EachInputInfo.type}
                              onChange={(e) => {
                                 setForm((prev) => {
                                    return {...prev, [EachInputInfo.name]: e.target.value}
                                 });
                              }}
                              onInput={(e) => {
                                 e.target.style.height = "auto";
                                 e.target.style.height = e.target.scrollHeight + "px";
                                 }}
                              value={form[EachInputInfo.name]  || ""}
                              className="bg-[#f3e6fa] rounded-md scrollbar-hide w-full py-5 px-5 font-sans text-center placeholder:text-center placeholder-current::placeholder focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"/>
                        )
                           :
                           // Short input area
                           (
                              <input
                                 placeholder={EachInputInfo.placeholder}
                                 type={EachInputInfo.type}
                                 onChange={(e) => {
                                    if (EachInputInfo.name === "habitGoal") {
                                       setForm((prev) => {
                                          return {...prev,  habitGoal: {
                                          ...form.habitGoal,
                                          value: e.target.value
                                          }}}
                                       );
                                    } else {
                                       setForm((prev) => {
                                          return {...prev, [EachInputInfo.name]:  e.target.value}
                                       });
                                    }
                                 }}
                                 value={
                                    EachInputInfo.name === "habitGoal"
                                    ? form.habitGoal?.value || ""
                                    : form[EachInputInfo.name] || ""
                                 }
                                 className="bg-[#f3e6fa] rounded-md overflow-hidden w-full h-12 py-5 px-5 font-sans text-center  placeholder:text-center placeholder-current::placeholder focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"/>
                           )

                     ) : (
                           <div className="flex w-full justify-between mt-3">

                              {/* Radio buttons */}
                              {EachInputInfo.options?.map((EachOption, i) => {
                                 return (
                                    <div key={i}>
                                       <label
                                          className={`px-18 py-5 rounded-full cursor-pointer text-lg border ${form[EachInputInfo.name] === EachOption.value ? "bg-[#8B5CF6] text-white" : "bg-white text-[#746e7c]"}`}
                                          onClick={() => setForm((prev) => {return {...prev, [EachInputInfo.name]: EachOption.value}})}>
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
