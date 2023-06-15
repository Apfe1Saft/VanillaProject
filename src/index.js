import "./styles.css";

document.getElementById("app").innerHTML = `
<body>
  <h1>Hello World</h1>
  <h1 id="my-text">Text 1</h1>
  <button id="my-button" onclick="changeText()">Click me</button>
  <textarea id="my-textarea"></textarea>
  <button id="add-data" onclick="addItem()">Add Item</button>
  <ul id="my-list">
    <li>Item</li>
    <li>Item</li>
  </ul>
  <script>
    function changeText() {
      console.log('Hello World');
      document.getElementById('my-text').innerText = 'My notebook';
    }
    function addItem() {
      var ul = document.getElementById('my-list');
      var li = document.createElement('li');
      var textarea = document.getElementById('my-textarea');
      li.innerText = "Item";
      ul.appendChild(li);
    }
  </script>
</body>
`;
