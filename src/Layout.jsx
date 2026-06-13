import { useState, useEffect, useContext } from "react";
import TopNavBar from "./components/Layout/TopNavBar";
import BottomNavBar from "./components/Layout/BottomNavBar";
import { Outlet } from "react-router-dom";
import { useWallet } from "./Context/WalletContext";
import { milestoneToLevel, checkAlreadyMinted, mintNFT } from "./utils/mintHelper";
import UserContext from "./Context/UserContext";
import TextWithLogo from "./assets/Logos/jiggy_icon-t.png";

export default function Layout() {
   const { walletAddress } = useWallet();
   const { notify } = useContext(UserContext);
   const [isMinting, setIsMinting] = useState(false);

   useEffect(() => {
      const claimPending = async () => {
         const pending = localStorage.getItem("pendingMilestone");
         if (!walletAddress || !pending) return;

         const streak = Number(pending);
         const level = milestoneToLevel(streak);

         try {
            const alreadyMinted = await checkAlreadyMinted(walletAddress, level);
            if (!alreadyMinted) {
               setIsMinting(true);
               await mintNFT(walletAddress, streak);
               notify("Your pending NFT has been claimed! 🎉", "success");
            }
         } catch (err) {
            console.error("Pending mint failed:", err);
            notify("Minting failed. Check network/wallet.", "error");
         } finally {
            setIsMinting(false);
            localStorage.removeItem("pendingMilestone");
         }
      };

      claimPending();
   }, [walletAddress]);

  return (
      <div className="select-none">
         {isMinting && (
            <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-50">
               <div className="fade-logo flex justify-center items-center p-2 bg-gray-50 opacity-80 rounded-full">
                  <img src={TextWithLogo} alt="Loading" className="w-35" />
               </div>
               <p className="text-white mt-4">Minting NFT...</p>
            </div>
         )}
         <TopNavBar />
         <div className="mx-2 pt-25 md:pt-27 mb-30">
            <Outlet />
         </div>
         <BottomNavBar />
      </div>
  )
}