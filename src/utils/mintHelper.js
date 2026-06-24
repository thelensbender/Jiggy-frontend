const BACKEND_URL = "https://jiggy-backend-lbpz.onrender.com";

export function milestoneToLevel(streak) {
  if (streak === 7) return 1;
  if (streak === 30) return 2;
  if (streak === 100) return 3;
  return 0;
}

export async function checkAlreadyMinted(walletAddress, level) {
  const res = await fetch(`${BACKEND_URL}/has-minted?address=${walletAddress}&level=${level}`);
  const { hasMinted } = await res.json();
  return hasMinted;
}

export async function mintNFT(walletAddress, streakLevel) {
  const level = milestoneToLevel(streakLevel);
  const res = await fetch(`${BACKEND_URL}/mint`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address: walletAddress, level })
  });
  const data = await res.json();
  if (!data.success) throw new Error(data.error || "Mint failed");
  return data;
}