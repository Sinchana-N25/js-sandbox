// Expense Tracker Functions:
// 1. Filter expenses by category
// 2. Sort filtered expenses in ascending order
// 3. Sort filtered expenses in descending order
// 4. Show total amount of filtered expenses
// 5. Show all expenses (no filtering)
// 6. Add expense: Allows users to input new expense data and updates the list

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

let filtered = [];

function renderList(list) {
  expensesList.innerHTML = "";
  for (let info of list) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(`
      ${info.description}: ₹${info.amount}`);
    node.appendChild(textnode);
    expensesList.appendChild(node);
  }
}

let getCategoryTotal = (category) => {
  filtered = expenses.filter(
    (x) => x.category.toLowerCase() === category.toLowerCase()
  );
  renderList(filtered);
};

function sortAcending() {
  let filtered_asc = [...filtered].sort((a, b) => a.amount - b.amount);
  renderList(filtered_asc);
}

function sortDescending() {
  let filtered_desc = [...filtered].sort((a, b) => b.amount - a.amount);
  renderList(filtered_desc);
}

function showTotal() {
  expensesList.innerHTML = "";
  let filtered_total = filtered.reduce((sum, item) => sum + item.amount, 0);
  let node = document.createElement("h5");
  let textnode = document.createTextNode(`Total spent: ₹${filtered_total}`);
  node.appendChild(textnode);
  expensesList.appendChild(node);
}

function showAll() {
  expensesList.innerHTML = "";
  for (let info of expenses) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(`
      ${info.category}: ${info.description}: ₹${info.amount}`);
    node.appendChild(textnode);
    expensesList.appendChild(node);
  }
}

let expensesList = document.getElementById("expensesList");
let filterButton = document.getElementById("filterBtn");
let sortAscButton = document.getElementById("sortAscBtn");
let sortDescButton = document.getElementById("sortDescBtn");
let totalButton = document.getElementById("totalBtn");
let showAllButton = document.getElementById("showAllBtn");

filterButton.addEventListener("click", () => {
  let category = document.getElementById("categoryFilter").value;
  getCategoryTotal(category);
});

sortAscButton.addEventListener("click", sortAcending);
sortDescButton.addEventListener("click", sortDescending);
totalButton.addEventListener("click", showTotal);
showAllButton.addEventListener("click", showAll);

function addExpense() {
  const amount = Number(document.getElementById("newAmount").value);
  const category = document.getElementById("newCategory").value.trim();
  const description = document.getElementById("newDescription").value.trim();

  // Basic validation
  if (!amount || !category || !description) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Add to expenses array
  expenses.push({ amount, category, description });

  // Re-render entire list to show new expense
  showAll();

  // Clear input fields
  document.getElementById("newAmount").value = "";
  document.getElementById("newCategory").value = "";
  document.getElementById("newDescription").value = "";
}

// Button hookup
let addExpenseButton = document.getElementById("addExpenseBtn");
addExpenseButton.addEventListener("click", addExpense);
