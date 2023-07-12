import "./styles.css";
const button = document.getElementById("add-data");
button.addEventListener("click", clickFunction);

let heading = document.getElementById("my-heading");
const list = document.getElementById("my-list");
let message = document.getElementById("my-textarea");

function clickFunction() {
  console.log("hello world");
  heading.innerHTML = "My notebook";
  let li = document.createElement("li");
  li.innerText = message.value;
  list.appendChild(li);
}
