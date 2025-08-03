Day 5:
Focus: DOM Manipulation with JavaScript
Features:

- Render expenses dynamically into the DOM
- Filter expenses by category (via input)
- Sort expenses by amount (ascending/descending)
- Show total amount using a button
- Show all expenses (no filtering)

Day 6:
Render function created to remove repetitive DOM logic
Handles displaying any array of expense objects
Accepts 'list' as parameter (e.g., filtered, sorted lists) for flexibility

Used renderList() for:

- filtered category items
- ascending sorted list
- descending sorted list

This improves readability and reduces code duplication

Day 7:
showTotal() now uses reduce properly to calculate total spent
renderList() is reused for consistent UI updates (except for showTotal/showAll)
Code is cleaner and more modular

Also added a dedicated showAll() button:

- Displays all expense entries regardless of category
- Useful for resetting the view after filtering or sorting

Day 8:

- Added "✏️ Edit" button beside each expense item
- When clicked, it toggles that expense into editable mode (amount + description inputs and ✅ Save)
- Created `editExpense(index)` to set only one item in `isEditing: true` mode
- Created `saveEdit(index, newAmount, newDesc)` to apply updates and refresh the list
- Modified `renderList()` to support both normal and edit views conditionally
- Added optional CSS for `.expense-item` and `.edit-mode` for future styling

Day 9:

- Add `timestamp` property when a new expense is added or edited.
- Format timestamp to readable `DD MMM YYYY, hh:mm AM/PM`.
- Update UI to show timestamp under each expense.
- Mark edited entries with “(edited)” label.
- Add `.timestamp` class for faded timestamp styling.
