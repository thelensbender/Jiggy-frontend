import TopNavBar from "./components/Layout/TopNavBar";
import BottomNavBar from "./components/Layout/BottomNavBar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className="select-none">
      <TopNavBar />
      <div className="pt-25 pb-10">
         <Outlet />
      </div>
      <BottomNavBar />
    </div>
  )
}
