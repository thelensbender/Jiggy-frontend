import {useContext} from "react";
import UserContext from "../UserContext";
import {useNavigate } from "react-router-dom";

import ElementHeader from "../components/UI/ElementHeader";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

import { User, Pencil, Save, ArrowLeft } from 'lucide-react';

export default function PersonalInformationPage() {
   const { userInfo, notify, setUserInfo, form, setForm, formFormat } = useContext(UserContext);
   const navigate = useNavigate();

   const elementInfo = {
      icon: userInfo.profilePicture ? userInfo.profilePicture : User,
      editable: {status: true, icon: Pencil},
      style: {width: "9rem", height: "9rem"}
   }

   const inputInfos = [
      {
         label: "short",
         placeholder: "Enter your full name",
         type: "text",
         name: "fullName",
         required: true,
         heading: "Full Name",
         options: []
      },
      {
         label: "short",
         placeholder: "Enter your username",
         type: "text",
         name: "username",
         required: true,
         heading: "Username",
         options: []
      },
      {
         label: "short",
         placeholder: "Enter your Email Address",
         type: "text",
         name: "email",
         required: false,
         heading: "Email Address",
         options: []
      },
      {
         label: "long",
         placeholder: "Express yourself!",
         type: "text",
         name: "bio",
         required: false,
         heading: "Bio",
         options: []
      }
   ]

   const buttonInfo = [
      {
         text: "Save Changes",
         icon: Save,
         backgroundColor: "#8B5CF6",
         textColour: "white",
         onClick: ()=> {
                     if((form.userInfo.fullName === "" && userInfo.fullName === "") || (form.userInfo.username === "" && userInfo.username === "")) {
                        notify("Fill up the required fields please!", "error");
                        return;
                     }
                     setUserInfo((prev) => {
                        return {...prev,
                           fullName: form.userInfo.fullName !== "" ? form.userInfo.fullName : userInfo.fullName,
                           username: form.userInfo.username !== "" ? form.userInfo.username : userInfo.username,
                           email: form.userInfo.email !== "" ? form.userInfo.email : userInfo.email,
                           bio: form.userInfo.bio !== "" ? form.userInfo.bio : userInfo.bio
                        }
                     });
                     notify(`Successful`, "success");
                     setForm(formFormat);
                     navigate("/profile");
                  }
      },
      {
         text: "Cancel",
         icon: "",
         backgroundColor: "white",
         textColour: "#746e7c",
         onClick: () => {
            setForm(formFormat);
            navigate("/profile");
         }

      }
   ]

  return (
   // Main div
   <div className="flex justify-center pb-20">
      {/* Element div */}
      <div className="flex flex-col items-center w-1.3/4">
         {/* Heading */}
         <div className="flex items-center justify-center gap-5">
            <div
               onClick={() => {
               navigate("/profile")
            }}
            className="cursor-pointer p-3 rounded-full bg-white">
               <ArrowLeft color="gray"/>
            </div>
            <div className="text-4xl font-bold font-sans">Personal Information</div>
         </div>
         {/* Elements div */}
         <div className="flex flex-col items-center">
            <ElementHeader elementInfo={elementInfo}/>
         </div>


         {/* Input field */}
         <div className="mt-10 w-full rounded-3xl bg-white px-10 pb-10">
               <Input inputInfo={inputInfos}/>
         </div>

         {/* Buttons */}
         <div className="flex flex-col gap-3 w-full mt-10">
            {buttonInfo.map((buttonInfo, i) =>{
               return (
                  <Button
                  key={i}
                  onClick={buttonInfo.onClick}
                  buttonInfo={buttonInfo}/>
               )
            })}
         </div>
      </div>
   </div>
  )
}
