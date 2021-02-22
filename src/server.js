import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fetch from 'node-fetch';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.post('/login', async (req, res) => {
 let {username, password} = req.body;
 
 let response = await fetch('http://localhost:3000/users');
 let users = await response.json();
 let user = users.find(user => user.username === username && user.password === password);
 res.send(user);
});

app.get('/players', async (req,res) => {
  let response = await fetch('http://localhost:3000/players');
  res.send(await response.json());
})

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
