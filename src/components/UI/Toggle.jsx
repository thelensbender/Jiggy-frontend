import { useState } from "react"

export default function Toggle() {
   const [enabled, setEnabled] = useState(false)

   return (
      <button
         onClick={() => setEnabled(!enabled)}
         className={`cursor-pointer w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${
            enabled ? "bg-[#8B5CF6]" : "bg-gray-300"
         }`}>
         <div
            className={`h-4 w-4 bg-white rounded-full transition-transform duration-300 ${
               enabled ? "translate-x-6" : "translate-x-0"
            }`}
         />
      </button>
   )
}