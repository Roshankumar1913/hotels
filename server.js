const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send('Welcome to our hotel..');
});

const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', MenuItemRoutes);

app.listen(3000, () => {
  console.log('lishtening on port 3000');
});
