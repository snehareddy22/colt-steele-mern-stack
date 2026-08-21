// const name=document.querySelector('#name');
// const amount=document.querySelector('#amount');
// const dropdown=document.querySelector('#dropdown');
const form=document.querySelector('#myform')
const output=document.querySelector('#output')


const expenses_tracker=[];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const expenses={
    NAME:document.getElementById('name').value,
    AMOUNT:document.getElementById('amount').value,
    DROPDOWN:document.getElementById('dropdown').value
  };
expenses_tracker.push(expenses);
 // Display the user
const li = document.createElement("li");
li.textContent = `${expenses.NAME} - ${expenses.AMOUNT}-${expenses.DROPDOWN}`;
output.appendChild(li);
form.reset();
});

reset.addEventListener("click",function(event){
    expenses_tracker.length = 0;
    output.innerHTML = "";
})