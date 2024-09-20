const form = document.getElementById("form1");
const firstName = document.querySelector("input");
const lastName = document.querySelectorAll("input"); //[1]
const submitBtn = document.querySelectorAll("input"); //[2]

let info = {};

submitBtn[2].onclick = (e) => {
  e.preventDefault();
  info.firstName = firstName.value;
  info.lastName = lastName[1].value;
  console.log(info);
};
