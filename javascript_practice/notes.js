// # JavaScript Form & Expense Tracker — Summary Notes

// ## 1. `preventDefault()`

// Used to stop the browser's default behavior.

// For a form:

// ```js
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
// });
// ```

// Without it, the form normally submits/reloads the page.

// **Remember:**

// * `preventDefault()` → stops default browser behavior
// * `stopPropagation()` → stops event bubbling

// ---

// ## 2. Getting values from inputs

// HTML:

// ```html
// <input id="name">
// <input id="amount">
// ```

// JavaScript:

// ```js
// document.getElementById("name").value
// document.getElementById("amount").value
// ```

// `.value` gets whatever the user entered.

// ---

// ## 3. Getting a value from a dropdown

// HTML:

// ```html
// <select id="dropdown">
//   <option value="Food">Food</option>
//   <option value="Transport">Transport</option>
//   <option value="Rent">Rent</option>
// </select>
// ```

// JavaScript:

// ```js
// document.getElementById("dropdown").value
// ```

// If the user selects Food, it returns:

// ```text
// Food
// ```

// ---

// ## 4. Creating an object

// We created an expense object:

// ```js
// const expenses = {
//   NAME: document.getElementById("name").value,
//   AMOUNT: document.getElementById("amount").value,
//   DROPDOWN: document.getElementById("dropdown").value
// };
// ```

// Example result:

// ```js
// {
//   NAME: "Lunch",
//   AMOUNT: "200",
//   DROPDOWN: "Food"
// }
// ```

// **Important:** Declare variables with `const` or `let`.

// Don't do:

// ```js
// expenses = {...}
// ```

// Prefer:

// ```js
// const expenses = {...}
// ```

// ---

// ## 5. Storing objects inside an array

// Create an empty array:

// ```js
// const expenses_tracker = [];
// ```

// Add an object:

// ```js
// expenses_tracker.push(expenses);
// ```

// After several submissions:

// ```js
// [
//   {
//     NAME: "Lunch",
//     AMOUNT: "200",
//     DROPDOWN: "Food"
//   },
//   {
//     NAME: "Uber",
//     AMOUNT: "150",
//     DROPDOWN: "Transport"
//   }
// ]
// ```

// ### Important

// `push()` adds something **to the array**.

// So:

// ```js
// expenses_tracker.push(expenses);
// ```

// not:

// ```js
// expenses.push(expenses_tracker);
// ```

// ---

// # 6. Showing data on the webpage

// HTML:

// ```html
// <ul id="output"></ul>
// ```

// Select it:

// ```js
// const output = document.querySelector("#output");
// ```

// Create an `<li>`:

// ```js
// const li = document.createElement("li");
// ```

// Put text inside it:

// ```js
// li.textContent = `${expenses.NAME} - ${expenses.AMOUNT} - ${expenses.DROPDOWN}`;
// ```

// Add it to the `<ul>`:

// ```js
// output.appendChild(li);
// ```

// So the process is:

// ```text
// Create object
//      ↓
// Push object into array
//      ↓
// Create <li>
//      ↓
// Put object data into <li>
//      ↓
// Append <li> to <ul>
// ```

// ---

// # 7. `createElement()`

// Creates a new HTML element using JavaScript.

// ```js
// document.createElement("li");
// ```

// This creates:

// ```html
// <li></li>
// ```

// It doesn't appear on the webpage until you append it somewhere.

// ---

// # 8. `appendChild()`

// Adds an element inside another element.

// ```js
// output.appendChild(li);
// ```

// Meaning:

// ```text
// <ul>
//     ↓
//     <li>
// </ul>
// ```

// ---

// # 9. `form.reset()`

// After submitting:

// ```js
// form.reset();
// ```

// clears the form inputs and returns the dropdown to its initial option.

// It **does not** clear your array.

// ---

// # 10. Resetting the entire expense tracker

// You had:

// ```js
// reset.addEventListener("click", function() {
//   expenses_tracker.length = 0;
//   output.innerHTML = "";
// });
// ```

// Two separate things happen.

// ### Clear the array

// ```js
// expenses_tracker.length = 0;
// ```

// This removes everything from the array.

// ### Clear the webpage

// ```js
// output.innerHTML = "";
// ```

// This removes everything inside the `<ul>`.

// So:

// ```text
// Click Reset
//     ↓
// Array cleared
//     ↓
// HTML list cleared
// ```

// ---

// # 11. Selecting elements with `querySelector()`

// For an ID:

// ```js
// document.querySelector("#myform");
// ```

// The `#` means **ID**.

// For example:

// ```html
// <form id="myform">
// ```

// Use:

// ```js
// document.querySelector("#myform");
// ```

// If you write:

// ```js
// document.querySelector("output");
// ```

// JavaScript looks for an actual:

// ```html
// <output>
// ```

// element.

// It does **not** mean an element with `id="output"`.

// For:

// ```html
// <ul id="output">
// ```

// use:

// ```js
// document.querySelector("#output");
// ```

// ---

// # 12. Removing an individual expense — concept

// We discussed two approaches.

// ### Approach 1: Unique ID

// Give every expense its own ID and use that ID to find and remove the correct object.

// More reliable for a real application.

// ### Approach 2: Array index

// Use the position of the expense:

// ```text
// 0 → Lunch
// 1 → Uber
// 2 → Rent
// ```

// Then use `splice()` to remove one.

// For example:

// ```js
// expenses_tracker.splice(index, 1);
// ```

// This is easier to understand while learning, but indexes change when items are deleted.

// ---

// # 13. `splice()`

// Used to remove items from an array.

// ```js
// array.splice(index, numberOfItems);
// ```

// Example:

// ```js
// expenses_tracker.splice(1, 1);
// ```

// Means:

// > Starting at index `1`, remove `1` item.

// ---

// # 14. The overall expense tracker flow

// Your application works like this:

// ```text
// USER FILLS FORM
//        ↓
// CLICK SUBMIT
//        ↓
// preventDefault()
//        ↓
// GET INPUT VALUES
//        ↓
// CREATE EXPENSE OBJECT
//        ↓
// PUSH OBJECT INTO ARRAY
//        ↓
// CREATE <li>
//        ↓
// DISPLAY EXPENSE ON PAGE
//        ↓
// form.reset()
// ```

// And Reset:

// ```text
// CLICK RESET
//        ↓
// expenses_tracker.length = 0
//        ↓
// output.innerHTML = ""
//        ↓
// EVERYTHING CLEARED
// ```

// ### Core methods you learned

// | Method / Property  | Purpose                       |
// | ------------------ | ----------------------------- |
// | `preventDefault()` | Stop default browser behavior |
// | `.value`           | Get input/dropdown value      |
// | `push()`           | Add item to array             |
// | `createElement()`  | Create HTML element           |
// | `textContent`      | Set text inside an element    |
// | `appendChild()`    | Add element to webpage        |
// | `reset()`          | Clear form                    |
// | `length = 0`       | Empty an array                |
// | `innerHTML = ""`   | Clear HTML content            |
// | `splice()`         | Remove items from an array    |
// | `querySelector()`  | Select an HTML element        |
