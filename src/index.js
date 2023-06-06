import "./styles.css";

document.getElementById("app").innerHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Task</title>
</head>
<body>
  <h1 id="notebook-title">Hello world</h1>

  <button id="my-button" onclick="firstFunct()">Click me</button>

  <ul id="note-list"></ul>

  <textarea id="note-input" rows="4" cols="50"></textarea>

  <button id="add-data">Add Note</button>

  <script>
    // Get the necessary elements
    const h1 = document.getElementById('notebook-title');
    const addButton = document.getElementById('my-button');
    const list = document.getElementById('note-list');
    const input = document.getElementById('note-input');
    const addDataButton = document.getElementById('add-data');

    function firstFunct(){
        console.log('Hello world');
        h1.innerText = 'My notebook';
    }

    function secondFunct(){
        const note = input.value.trim();
      if (note !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = note;
        list.appendChild(listItem);
        input.value = '';
      }
    }
  </script>
</body>
</html>
`;
