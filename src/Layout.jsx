import TopNavBar from "./components/Layout/TopNavBar";
import BottomNavBar from "./components/Layout/BottomNavBar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
      <div className="select-none">
         <TopNavBar />
         <div className="mx-2 pt-25 mb-30">
            <Outlet />
         </div>
         <BottomNavBar />
      </div>
  )
}
