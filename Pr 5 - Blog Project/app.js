const express = require('express');
const port = 2211;
const cookiesparser = require('cookie-parser')

const app = express();
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`server start at http://localhost:${port}/dashboard`);
})
const dbconnect = require('./config/db.connection')
dbconnect();

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(cookiesparser());

app.use('/', require('./routes/index.routes'))
app.use('/uploads', express.static('uploads'));




