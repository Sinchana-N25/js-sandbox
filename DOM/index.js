let expenses = [
  {
    amount: 1200,
    category: "Food",
    description: "Groceries",
    isEditing: false,
  },
  {
    amount: 300,
    category: "Transport",
    description: "Bus ticket",
    isEditing: false,
  },
  {
    amount: 2200,
    category: "Shopping",
    description: "Clothes",
    isEditing: false,
  },
  { amount: 150, category: "Food", description: "Snacks", isEditing: false },
  {
    amount: 600,
    category: "Entertainment",
    description: "Movies",
    isEditing: false,
  },
  {
    amount: 80,
    category: "Transport",
    description: "Auto fare",
    isEditing: false,
  },
];

let filtered = [];

function renderList(list) {
  expensesList.innerHTML = "";
  list.forEach((info, index) => {
    const li = document.createElement("li");
    li.className = "expense-item";

    if (info.isEditing) {
      // Editable inputs
      const amountInput = document.createElement("input");
      amountInput.type = "number";
      amountInput.value = info.amount;

      const descInput = document.createElement("input");
      descInput.type = "text";
      descInput.value = info.description;

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "✅";
      saveBtn.addEventListener("click", () => {
        saveEdit(index, amountInput.value, descInput.value);
      });

      li.appendChild(amountInput);
      li.appendChild(descInput);
      li.appendChild(saveBtn);
    } else {
      // Normal view
      const contentSpan = document.createElement("span");
      contentSpan.textContent = `${info.description}: ₹${info.amount}`;
      contentSpan.className = "expense-content";
      li.appendChild(contentSpan);

      // Timestamp span
      const timestampSpan = document.createElement("span");
      timestampSpan.className = "timestamp";
      timestampSpan.textContent = `${info.timestamp}${
        info.edited ? " (edited)" : ""
      }`;
      li.appendChild(timestampSpan);

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.addEventListener("click", () => editExpense(index));
      li.appendChild(editBtn);

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.addEventListener("click", () => deleteExpense(index));
      li.appendChild(deleteBtn);
    }

    expensesList.appendChild(li);
  });
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
  expenses.forEach((x) => (x.isEditing = false)); // Reset edit state
  filtered = []; // Clear filter
  renderList(expenses);
}

function deleteExpense(index) {
  if (confirm("Are you sure you want to delete this expense?"))
    expenses.splice(index, 1); // Remove the item
  showAll(); // Refresh list
}

function editExpense(index) {
  // Set editing flag only on one item
  expenses.forEach((item, i) => {
    item.isEditing = i === index;
  });
  renderList(filtered.length > 0 ? filtered : expenses);
}

function saveEdit(index, newAmount, newDesc) {
  // Update values
  expenses[index].amount = Number(newAmount);
  expenses[index].description = newDesc;
  expenses[index].isEditing = false;
  renderList(filtered.length > 0 ? filtered : expenses);
}

function getCurrentFormattedTime() {
  const now = new Date();
  return now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
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
  let amount = Number(document.getElementById("newAmount").value);
  let category = document.getElementById("newCategory").value.trim();
  let description = document.getElementById("newDescription").value.trim();

  // Basic validation
  if (!amount || !category || !description) {
    alert("Please fill out all fields correctly.");
    return;
  }
  let newExpense = {
    amount: Number(amt),
    category: cat,
    description: desc,
    timestamp: getCurrentFormattedTime(),
    edited: false,
  };

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
