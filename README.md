# Jiggy

Jiggy is a reward-based habit tracker. Log your daily habits, build streaks, and earn real, on-chain NFT badges when you hit major milestones — 7, 30, and 100 days. Think Duolingo's streak system, but your reward is a soulbound NFT you actually own.

---

## What It Does

- **Create and track habits** — add daily habits, log progress, and watch your streaks grow
- **Automatic streak calculation** — streaks update every time you log an entry, and reset if you miss a day
- **Stats dashboard** — view your active streak, best streak ever, daily activity, and milestone progress
- **NFT rewards** — hit a 7, 30, or 100-day streak (on your best-performing habit) and earn a unique, non-transferable "Jiggy" NFT badge (Bronze, Silver, Gold)
- **Wallet connect** — connect a MetaMask wallet to receive your NFTs directly
- **Claim later** — if you hit a milestone before connecting a wallet, your reward is saved and automatically claimed the next time you connect

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React (Vite) | UI framework + dev server |
| Tailwind CSS | Styling |
| React Router | Page navigation |
| ethers.js (v6) | Wallet connection and contract interaction |
| canvas-confetti | Milestone celebration effects |
| localStorage | Client-side data persistence |
| Solidity (ERC-721) | Smart contract for NFT rewards (see [contracts repo](#)) |
| Node.js / Express | Backend minting service (see [backend repo](#)) |

---

## How It Works

1. **Log a habit** — every day, mark a habit as done. Your streak for that habit increases.
2. **Hit a milestone** — when your *highest* streak across all habits reaches 7, 30, or 100 days, Jiggy celebrates with confetti and flags the reward.
3. **Mint your NFT**:
   - If your wallet is connected, the app calls a backend service that mints the corresponding NFT (Bronze/Silver/Gold) directly to your wallet.
   - If no wallet is connected, the milestone is saved locally. The next time you connect a wallet, the NFT is minted automatically.
4. **NFTs are soulbound** — once minted, they cannot be transferred or sold. They're proof of *your* consistency.
5. **One NFT per level** — each wallet can only earn each badge (Bronze, Silver, Gold) once.

---

## Project Structure

```
src/
├── Context/
│   ├── UserContext.js       # Global app state — habits, user info, form state
│   └── WalletContext.jsx     # Wallet connection state (MetaMask via ethers.js)
├── Pages/
│   ├── DashboardPage.jsx
│   ├── HabitPage.jsx
│   ├── LogEntryPage.jsx      # Habit logging + milestone/NFT mint trigger
│   ├── StatPage.jsx          # Stats, streak history, NFT achievements
│   └── ProfilePage.jsx / SettingsPages
├── components/
│   ├── UI/                   # Reusable UI elements (Button, Input, etc.)
│   └── Layout/                # Navbars, layout wrappers, modals
├── utils/
│   └── mintHelper.js         # NFT minting + milestone-level helpers
├── config.js                  # Smart contract address + ABI
└── App.jsx / Layout.jsx       # Routing and global providers
```

---

## Getting Started

**Prerequisites:** Node.js 18+, MetaMask browser extension

```bash
# Clone the repo
git clone https://github.com/thelensbender/Jiggy.git
cd Jiggy

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Streak Logic

The streak is the number of **consecutive days** (ending today or yesterday) where an entry exists for a habit.

```
calculateStreak(entries):
  1. Sort entries by date, most recent first
  2. Compare the most recent entry to today
     → if the gap is 2+ days, streak = 0
  3. Walk backward through sorted entries
     → count consecutive days with no gaps
  4. Return the count
```

A streak survives if you logged **today or yesterday**. Any larger gap resets it to zero.

The NFT milestone check uses the **highest streak across all habits** — not the sum. Whichever habit you're most consistent with determines your progress toward the next badge.

---

## NFT Milestones

| Badge | Streak Required | Level |
|---|---|---|
| 🥉 Bronze | 7 days | 1 |
| 🥈 Silver | 30 days | 2 |
| 🥇 Gold | 100 days | 3 |

NFTs are minted on the **Sepolia testnet** via a smart contract deployed at the address in `src/config.js`. The contract is owner-restricted — minting is performed by a backend service (see the backend repo) on behalf of the user's connected wallet address, so users never need to pay gas or sign a minting transaction themselves.

---

## Wallet & Backend Flow

- The frontend connects to MetaMask via `WalletContext.jsx` (ethers v6, `BrowserProvider`)
- When a milestone is hit, the frontend checks the backend (`/has-minted`) to see if the user already owns that badge
- If not, it calls the backend (`/mint`), which signs and sends the mint transaction using the contract owner's wallet
- The resulting NFT appears in the user's connected wallet and on Sepolia Etherscan

Backend repo: *link here*
Smart contract repo: *link here*

---

## Data Shape

Each habit in state looks like this:

```js
{
  habitId: "uuid",
  habitName: "Read a book",
  habitDescription: "",
  habitUnit: "days",
  habitIcon: "BookOpen",
  streak: 5,
  entries: [
    { date: "2026-06-08", duration: 0, reflection: "", entryId: "uuid" },
    { date: "2026-06-09", duration: 0, reflection: "", entryId: "uuid" }
  ]
}
```

Habit and user data persist in `localStorage`. Best streak and achievement status are also cached locally so they survive habit deletion.

---

## Key Concepts Practiced

- **Context API** for global state (user data, wallet connection)
- **On-chain integration** — wallet connection, contract reads/writes via ethers.js
- **Soulbound NFTs** — custom ERC-721 override preventing token transfers
- **Deferred/pending state handling** — milestones earned without a wallet are claimed later
- **Pure utility functions** — streak calculation is isolated and testable
- **localStorage persistence** for habits, user info, and achievement history

---

## Planned Features

- [ ] Visual streak history (calendar heatmap)
- [ ] Habit goal targets
- [ ] Weekly / monthly summary charts
- [ ] Export data as CSV
- [ ] Consistency score across all habits

---

## License
MIT