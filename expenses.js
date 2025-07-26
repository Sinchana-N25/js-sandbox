//Day 1:
// - Learned JS object & array basics
// - Created a mock array of expense objects (amount, category, description)
// - Explored data access using dot/bracket notation
// - Reinforced concepts like loops, indexing, length, typeof

// Day 2:
// - Practiced array methods: map, filter, reduce
// - Used reduce to get total expenses
// - Used filter+reduce combo to get category-wise totals
// - Practiced destructuring inside loops
// - Used spread operator to clone and update arrays immutably


let expenses = [
  { amount: 1200, category: "Food", description: "Groceries" },
  { amount: 300, category: "Transport", description: "Bus ticket" },
  { amount: 2200, category: "Shopping", description: "Clothes" },
  { amount: 150, category: "Food", description: "Snacks" },
  { amount: 600, category: "Entertainment", description: "Movies" },
  { amount: 80, category: "Transport", description: "Auto fare" },
];

mapped = expenses.map((x) => x.amount);
console.log(mapped);
console.log(expenses.filter((x) => x.amount > 500));
console.log(mapped.reduce((x, y) => x + y));

const getCategoryTotal = (category) => {
  filtered = expenses.filter((x) => x.category == category);
  console.log(filtered);
  console.log(filtered.reduce((x, y) => x.amount + y.amount));
};

getCategoryTotal("Food");

expenses.forEach((x) => console.log(x.amount));
expenses.forEach((x) => console.log(x.category));

let copy = [...expenses];
console.log(copy);
let newExpense = { amount: 400, category: "Books", description: "DSA guide" };
let updatedExpenses = [...expenses, newExpense];
console.log(updatedExpenses);