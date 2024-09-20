const body = document.getElementById("body");
const text = document.getElementById("text");
const styleBtn = document.getElementById("jsstyle");

body.style.paddingTop = "3rem";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

styleBtn.onclick = () => {
  text.style.fontFamily = "cursive";
  text.style.fontSize = "2rem";
  text.style.color = "orange";
};
