const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'apple',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Lidka',
      email: 'lidka@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ]
}

/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = new user object
/profile/:userId --> GET = user information
/image --> PUT = user score count
*/

app.get('/', (req, res) => {
  res.send('get is working');
})

app.post('/signin', (req, res) => {
  if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    res.json("you are logged in")
  } else {
    res.status(400).json('error logged in');
  }
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
    id: '125',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  })
  res.json('new user added')
})


app.listen(3000, () => {
  console.log('app is running on port 3000');
})