window.addEventListener("DOMContentLoaded", () => {
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

  let filtered = [...expenses];
  renderList(filtered);

  function renderList(list) {
    expensesList.innerHTML = "";
    list.forEach((info, index) => {
      const li = document.createElement("li");
      li.className = "expense-item";

      if (info.isEditing) {
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
        const contentSpan = document.createElement("span");
        contentSpan.textContent = `${info.description}: ₹${info.amount}`;
        contentSpan.className = "expense-content";
        li.appendChild(contentSpan);

        const timestampSpan = document.createElement("span");
        timestampSpan.className = "timestamp";
        timestampSpan.textContent = `${info.timestamp || ""}${
          info.edited ? " (edited)" : ""
        }`;
        li.appendChild(timestampSpan);

        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.addEventListener("click", () => editExpense(index));
        li.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => deleteExpense(index));
        li.appendChild(deleteBtn);
      }

      expensesList.appendChild(li);
    });
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
    expenses.forEach((x) => (x.isEditing = false));
    filtered = [...expenses];
    renderList(expenses);
  }

  function deleteExpense(index) {
    if (confirm("Are you sure you want to delete this expense?")) {
      expenses.splice(index, 1);
      showAll();
    }
  }

  function editExpense(index) {
    expenses.forEach((item, i) => {
      item.isEditing = i === index;
    });
    renderList(filtered.length > 0 ? filtered : expenses);
  }

  function saveEdit(index, newAmount, newDesc) {
    expenses[index].amount = Number(newAmount);
    expenses[index].description = newDesc;
    expenses[index].isEditing = false;
    expenses[index].edited = true;
    expenses[index].timestamp = getCurrentFormattedTime();
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

  function addExpense() {
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value.trim();
    let description = document.getElementById("description").value.trim();

    if (!amount || !category || !description) {
      alert("Please fill out all fields correctly.");
      return;
    }

    let newExpense = {
      amount,
      category,
      description,
      timestamp: getCurrentFormattedTime(),
      edited: false,
      isEditing: false,
    };

    expenses.push(newExpense);
    showAll();

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
  }

  // DOM Elements
  let expensesList = document.getElementById("expensesList");
  let filterButton = document.getElementById("filterBtn");
  let sortAscButton = document.getElementById("sortAscBtn");
  let sortDescButton = document.getElementById("sortDescBtn");
  let totalButton = document.getElementById("totalBtn");
  let showAllButton = document.getElementById("showAllBtn");
  let addExpenseButton = document.getElementById("addBtn");

  // Event Listeners
  filterButton.addEventListener("click", () => {
    const category = document.getElementById("categoryFilter").value.trim();
    filtered = expenses.filter(
      (x) => x.category.toLowerCase() === category.toLowerCase()
    );
    renderList(filtered);
  });

  sortAscButton.addEventListener("click", () => {
    renderList([...filtered].sort((a, b) => a.amount - b.amount));
  });

  sortDescButton.addEventListener("click", () => {
    renderList([...filtered].sort((a, b) => b.amount - a.amount));
  });

  totalButton.addEventListener("click", showTotal);
  showAllButton.addEventListener("click", showAll);
  addExpenseButton.addEventListener("click", addExpense);
});
