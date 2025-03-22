const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const users = [
  { id: 1, name: "Wayne", age: "21", bio: "Loves singing!"},
  { id: 2, name: "JD", age: "19", bio: "Loves coding!"},
  { id: 3, name: "Richard", age: "23", bio: "Loves eating!"}
]

app.get('/', (req, res) => {
  res.render('users', { users });
});

app.get('/users', (req, res) => {
  res.render('users', { users });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id == id);
  if (user) {
    res.render('profile', { user });
  } else {
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});