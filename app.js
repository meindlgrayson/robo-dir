const express = require('express');
const mustacheExpress = require('mustache-express');
const fs = require('fs');

const homeController = require('./controllers/home-controller.js');
const userController = require('./controllers/user-controller.js');

let application = express();

application.engine('mustache', mustacheExpress());

application.set('views', './views');
application.set('view engine', 'mustache'); 
application.use(express.static('public'));
application.use(homeController);
application.use(userController);

application.listen(3000);