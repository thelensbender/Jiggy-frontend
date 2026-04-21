# Streakflow
=======
# Streakflow

A clean, practical React app for tracking daily habits, streaks, and personal consistency metrics. Built as a portfolio project to practice real-world React patterns including component architecture, state management, streak logic, and localStorage persistence.

---

## What It Does

- **Add entries** — Log a value (e.g. hours coded, problems solved) for any metric you're tracking
- **Track streaks automatically** — The app calculates your current streak every time you log an entry, and resets it if you miss a day
- **Display stats** — See total entries, current streak, and latest values at a glance
- **Persist data** — Everything saves to `localStorage` so your data survives page refreshes

---

## Tech Stack

 Tool            | Purpose
-----------------|--------------------------------
 React (Vite)    | UI framework + fast dev server
 JavaScript      | Application logic
 Tailwind CSS    | Styling
 localStorage    | Client-side data persistence

---

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx       # Layout — renders the grid of metric cards
│   ├── MetricCard.jsx      # Displays one metric (name, value, streak)
│   ├── AddEntryForm.jsx    # Form to log a new entry for a metric
│   └── StatsBar.jsx        # Top bar showing aggregate totals + best streak
├── hooks/
│   └── useMetrics.js       # Custom hook for metric state management
├── utils/
│   ├── streakUtils.js      # Pure function: calculateStreak(entries)
│   └── dateUtils.js        # Helpers: isSameDay(), diffInDays()
├── data/
│   └── defaultMetrics.js   # Initial metric shapes / seed data
└── App.jsx                 # Root — owns all state, passes props down
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/thelensbender/Streakflow.git
cd daily-consistency-dashboard

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## How Streak Logic Works

The streak is calculated as the number of **consecutive days** (ending today or yesterday) where at least one entry exists for a given metric.

```
calculateStreak(entries):
  1. Sort entries by date, most recent first
  2. Compare most recent entry to today
     → if gap is 2+ days: streak = 0
  3. Walk backward through sorted entries
     → count days with no gap between them
  4. Return the count
```

A streak stays alive if you logged **today** or **yesterday**. Missing any day beyond that resets it to zero.

---

## Data Shape

Each metric in state looks like this:

```js
{
  id: "metric_1",
  name: "Coding Hours",
  unit: "hrs",
  streak: 4,
  entries: [
    { date: "2026-04-20", value: 2.5 },
    { date: "2026-04-21", value: 3 }
  ]
}
```

State lives in `App.jsx` and flows down to children as props. Events (like adding an entry) bubble back up via callback props — no prop drilling workarounds needed at this scale.

---

## Key Concepts Practiced

- **Unidirectional data flow** — state down via props, events up via callbacks
- **Pure utility functions** — streak and date logic is isolated, UI-free, and easy to test
- **Controlled components** — form inputs are driven by React state
- **localStorage persistence** — `useEffect` syncs state to storage on every change
- **Component responsibility** — each component does one thing and receives only what it needs

---

## Planned Features

- [ ] Visual streak history (calendar heatmap)
- [ ] Multiple habit categories
- [ ] Weekly / monthly summary charts
- [ ] Habit goal targets (e.g. "3 hrs/day")
- [ ] Export data as CSV

---

## License

MIT
>>>>>>> f0d7282 (initial commit)
