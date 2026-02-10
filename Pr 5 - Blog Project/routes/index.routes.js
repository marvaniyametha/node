const express = require('express');
const { loginpage, dashboardpage, loginuser } = require('../controller/auth.controller');
const routes = express.Router();

routes.get('/', loginpage);
routes.get('/dashboard', dashboardpage);


routes.use('/blog', require('../routes/blog.routes'))

module.exports = routes;