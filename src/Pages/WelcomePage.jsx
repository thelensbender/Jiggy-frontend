import {useContext} from "react";
import UserContext from "../Context/UserContext";

import {ArrowRight, Check} from "lucide-react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";




// Welcome Screen for new User
export default function WelcomeScreen() {
   const navigate = useNavigate();
   const { form, setUserInfo, notify, user } = useContext(UserContext);

   const inputInfo = [{
      label: "short",
      placeholder: "Your name or nickname",
      type: "text",
      name: "username",
      heading: "",
      required: true,
      options: [
         { label: "", value: "" },
         { label: "", value: "" }
      ]
   }]
   const buttonInfo ={
         text: "Let's go",
         icon: ArrowRight,
         backgroundColor: "#8B5CF6",
         textColour: "white"
      }

  return (
   // Main div
   <div className="flex items-center justify-center h-screen w-full">
      {/* Elements div */}
      <div className=" flex flex-col justify-items-center px-3 py-5 h-4/5">

         {/* Circles Div */}
         <div className="flex justify-center">
            <div className="relative rounded-full h-18 w-18 bg-[#8B5CF6]">
               <div className="orbit absolute top-1/2 left-1/2 rounded-full h-4 w-4 bg-[#7e4f00]"></div>
            </div>
         </div>

         {/* Text area */}
         <div className="mt-10">
            <div className="flex text-center justify-center font-sans font-bold text-3xl max-w-11/12  text-[#39264c]">What should we call you?</div>
            <div className="flex text-center justify-center font-thin text-[#8479c4] mt-4">We'll use this to personalize your dashboard.</div>
         </div>

         {/* Input field */}
         <Input inputInfo = {inputInfo} />


         {/* Let's go button */}
         <div className="w-full mt-8">
            <Button
               onClick = {()=> {
                  if (form.userInfo.username) {
                     setUserInfo((prev) => {
                        return { ...prev,
                           username: form.userInfo.username
                        }
                     });
                     console.log(user);
                     notify("Hello, " + form.userInfo.username + '!', "success")
                     navigate("/first-streak");
                  } else {
                     notify("Input a name or nickname please!", "error");
                  }
               }}
               buttonInfo = {buttonInfo}/>
         </div>
      </div>
   </div>
  )
}
