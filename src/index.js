import "./styles.css";

document.getElementById("app").innerHTML = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World Example</title>
  </head>
  <body>
    <h1 id="my-heading">Hello world</h1>

    <button id="my-button">Click me!</button>

    <ul id="my-list"></ul>

    <textarea id="my-textarea"></textarea>

    <button id="add-data">Add to List</button>

    <script>
      // Task 2: Creating a button
      const button = document.getElementById("my-button");
      button.addEventListener("click", function () {
        console.log("Hello world");

        // Task 3: Button DOM changes
        const heading = document.getElementById("my-heading");
        heading.textContent = "My notebook";
      });

      // Task 4: Unordered list
      const addDataButton = document.getElementById("add-data");
      const myList = document.getElementById("my-list");
      addDataButton.addEventListener("click", function () {
        // Task 5: Custom text to list
        const textarea = document.getElementById("my-textarea");
        const listItem = document.createElement("li");
        listItem.textContent = textarea.value;
        myList.appendChild(listItem);
      });
    </script>
  </body>
`;
