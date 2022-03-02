const path = require('path');
const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
