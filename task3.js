const myTable = document.getElementById("myTable");
const myCell = document.getElementsByTagName("td");

myTable.style.borderCollapse = "collapse";

let newText = ["Cats", "Dogs", "Cows", "Chickens"];

function changeContent() {
  myCell[1].textContent = newText.at(Math.floor(Math.random() * 4));
}
