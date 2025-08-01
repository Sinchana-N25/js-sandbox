let expenses = [
  { amount: 1200, category: "Food", description: "Groceries" },
  { amount: 300, category: "Transport", description: "Bus ticket" },
  { amount: 2200, category: "Shopping", description: "Clothes" },
  { amount: 150, category: "Food", description: "Snacks" },
  { amount: 600, category: "Entertainment", description: "Movies" },
  { amount: 80, category: "Transport", description: "Auto fare" },
];

let filtered = [];

function renderList(list) {
  expensesList.innerHTML = "";
  for (let info of list) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(
      `${info.description}: ₹${info.amount}`
    );
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
    let textnode = document.createTextNode(
      `${info.category}: ${info.description}: ₹${info.amount}`
    );
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
