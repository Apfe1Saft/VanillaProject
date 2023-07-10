import "./styles.css";

document.getElementById("app").innerHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    #input-image-preview {
      width: 64px;
      height: 64px;
    }
  </style>
</head>
<body>
  <h1>User Database</h1>

  <table id="user-table">
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Admin</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Webmaster</td>
        <td>example@email.com</td>
        <td>Demoland 123</td>
        <td>X</td>
        <td><img src="placeholder.png" alt="No Image" height="64" width="64"></td>
      </tr>
      <tr>
        <td>User123</td>
        <td>example@email.com</td>
        <td>Userplace 321</td>
        <td>-</td>
        <td><img src="placeholder.png" alt="No Image" height="64" width="64"></td>
      </tr>
      <tr>
        <td>AnotherUser222</td>
        <td>example@email.com</td>
        <td>AnotherPlace 21</td>
        <td>-</td>
        <td><img src="placeholder.png" alt="No Image" height="64" width="64"></td>
      </tr>
    </tbody>
  </table>

  <h2>Add/Edit User</h2>

  <form id="user-form">
    <label for="input-username">Username:</label>
    <input type="text" id="input-username" required><br><br>

    <label for="input-email">Email:</label>
    <input type="email" id="input-email" required><br><br>

    <label for="input-address">Address:</label>
    <input type="text" id="input-address" required><br><br>

    <label for="input-admin">Admin:</label>
    <input type="checkbox" id="input-admin"><br><br>

    <label for="input-image">Image:</label>
    <input type="file" id="input-image"><br><br>
    <img id="input-image-preview" src="#" alt="Preview">

    <button type="submit" id="submit-data">Submit</button>
    <button type="button" id="empty-table">Empty Table</button>
  </form>

  <script>
    const userForm = document.getElementById('user-form');
    const submitButton = document.getElementById('submit-data');
    const emptyTableButton = document.getElementById('empty-table');
    const userTable = document.getElementById('user-table');
    const imagePreview = document.getElementById('input-image-preview');

    userForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('input-username').value;
      const email = document.getElementById('input-email').value;
      const address = document.getElementById('input-address').value;
      const isAdmin = document.getElementById('input-admin').checked;

      // Check if the username already exists in the table
      const existingUsernameCell = Array.from(userTable.getElementsByTagName('td')).find(cell => cell.innerText === username);
      if (existingUsernameCell) {
        // Edit the existing row
        const row = existingUsernameCell.parentNode;
        row.cells[1].innerText = email;
        row.cells[2].innerText = address;
        row.cells[3].innerText = isAdmin ? 'X' : '-';
      } else {
        // Create a new row
        const newRow = userTable.insertRow();
        newRow.insertCell().innerText = username;
        newRow.insertCell().innerText = email;
        newRow.insertCell().innerText = address;
        newRow.insertCell().innerText = isAdmin ? 'X' : '-';
        newRow.insertCell().innerHTML = '<img src="placeholder.png" alt="No Image" height="64" width="64">';
      }

      // Reset form inputs
      userForm.reset();
      imagePreview.src = '#';
    });

    emptyTableButton.addEventListener('click', function() {
      // Remove all rows from the table except the table header
      const rowCount = userTable.rows.length;
      for (let i = rowCount - 1; i > 0; i--) {
        userTable.deleteRow(i);
      }
    });

    // Preview selected image
    const inputImage = document.getElementById('input-image');
    inputImage.addEventListener('change', function() {
      const file = inputImage.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        imagePreview.src = reader.result;
      });

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  </script>
</body>
</html>
`;
