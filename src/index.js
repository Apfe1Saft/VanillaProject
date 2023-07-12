import "./styles.css";
const button = document.getElementById("my-button");
button.addEventListener("click", clickMyButton);

const addData = document.getElementById("add-data");
addData.addEventListener("click", clickAddData);

let heading = document.getElementById("my-heading");
const list = document.getElementById("my-list");
let message = document.getElementById("my-textarea");

function clickMyButton() {
  console.log("hello world");
  heading.innerHTML = "My notebook";
}
function clickAddData() {
  let li = document.createElement("li");
  li.innerText = message.value;
  list.appendChild(li);
}