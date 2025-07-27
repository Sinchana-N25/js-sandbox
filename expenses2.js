// Expense Tracker Practice - Day 3
// 📅 Focus: Sorting, Filtering by Date, Monthly Aggregation
// Tasks Completed:
// - Sorted by amount (asc/desc), category (alphabetical), and date (oldest → newest)
// - Extracted and formatted dates
// - Searched and modified category/description text
// - Flagged large expenses
// - Grouped expenses by month and calculated total + count
// - Used optional chaining and nullish coalescing

let expenses = [
  {
    amount: 1200,
    category: "Food",
    description: "Groceries",
    date: "2024-03-10",
  },
  {
    amount: 300,
    category: "Transport",
    description: "Bus ticket",
    date: "2025-05-25",
  },
  {
    amount: 2200,
    category: "Shopping",
    description: "Clothes",
    date: "2025-06-10",
  },
  { amount: 150, category: "Food", description: "Snacks", date: "2024-07-30" },
  {
    amount: 600,
    category: "Entertainment",
    description: "Movies",
    date: "2024-01-10",
  },
  {
    amount: 80,
    category: "Transport",
    description: "Auto fare",
    date: "2024-11-21",
  },
];

// -------- Sorting Examples --------
console.log("Sorting amounts in ascending order:");
console.log([...expenses].sort((x, y) => x.amount - y.amount)); // use copy to avoid mutating original

console.log("Sorting amounts in descending order:");
console.log([...expenses].sort((x, y) => y.amount - x.amount));

console.log("Sorting categories in alphabetical order:");
console.log([...expenses].map((x) => x.category).sort());

console.log("Sorting dates from oldest to newest:");
console.log([...expenses].sort((x, y) => new Date(x.date) - new Date(y.date)));

// -------- Date Formatting --------
console.log("Formatted Dates:");
for (let info of expenses) {
  let date = new Date(info.date);
  console.log(date.toDateString()); // Human-readable
  console.log(
    `${date.getDate()} : ${date.getMonth() + 1} : ${date.getFullYear()}`
  ); // DD : MM : YYYY
}

// -------- Category & Description Checks --------
for (let info of expenses) {
  console.log(info.category.toLowerCase() === "food" ? "Food" : "Not found");
  console.log(info.description.trim());
  console.log(info.description.replace("Movies", "Cinema")); // will only change if it's "Movies"
}

// -------- Amount Conditions & Optional Chaining --------
for (let info of expenses) {
  if (info.amount > 1000) {
    console.log("Large Expense");
  }
  let missing = info.description?.description; // not needed here but shows optional chaining
  console.log(missing); // always undefined here, just a demo
  let unknown = info.category ?? "Unknown"; // only applies if category is null or undefined
  console.log(unknown);
}

// -------- Monthly Summary Function --------
let amounts = Array(12).fill(0); // holds total per month
let counts = Array(12).fill(0); // holds counts per month

let getMonthlySummary = (month) => {
  let total = 0;
  let count = 0;

  for (let info of expenses) {
    let date = new Date(info.date);
    if (date.getMonth() === month) {
      total += info.amount;
      count++;
    }
  }

  if (count > 0) {
    console.log(`Month: ${month + 1} -> ₹${total} across ${count} entries`);
    amounts[month] = total;
    counts[month] = count;
  }
};

// Run for each month (0 = Jan, 11 = Dec)
for (let month = 0; month < 12; month++) {
  getMonthlySummary(month);
}

// -------- Sorted Monthly Totals (non-zero only) --------
let nonZeroTotals = amounts.filter((amt) => amt > 0).sort((a, b) => a - b);
console.log("Sorted monthly totals (non-zero):", nonZeroTotals);
