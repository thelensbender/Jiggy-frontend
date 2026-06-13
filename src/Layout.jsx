import { useEffect } from "react";
import TopNavBar from "./components/Layout/TopNavBar";
import BottomNavBar from "./components/Layout/BottomNavBar";
import { Outlet } from "react-router-dom";
import { useWallet } from "./Context/WalletContext";
import { milestoneToLevel, checkAlreadyMinted, mintNFT } from "./utils/mintHelper";
import { useContext } from "react";
import UserContext from "./Context/UserContext";

export default function Layout() {
   const { walletAddress } = useWallet();
   const { notify } = useContext(UserContext);

   useEffect(() => {
      const claimPending = async () => {
         const pending = localStorage.getItem("pendingMilestone");
         console.log("Layout check — walletAddress:", walletAddress, "pending:", pending);
         if (!walletAddress || !pending) return;

         const streak = Number(pending);
         const level = milestoneToLevel(streak);
         console.log("Attempting claim — streak:", streak, "level:", level);

         try {
            const alreadyMinted = await checkAlreadyMinted(walletAddress, level);
            console.log("alreadyMinted:", alreadyMinted);
            if (!alreadyMinted) {
            await mintNFT(walletAddress, streak);
            console.log("mintNFT result:", "result");
            notify("Your pending NFT has been claimed! 🎉", "success");
            }
         } catch (err) {
            console.error("Pending mint failed:", err);
         } finally {
            localStorage.removeItem("pendingMilestone");
         }
      };

      claimPending();
   }, [walletAddress]);

  return (
      <div className="select-none">
         <TopNavBar />
         <div className="mx-2 pt-25 md:pt-27 mb-30">
            <Outlet />
         </div>
         <BottomNavBar />
      </div>
  )
}