const express = require('express');
const port = 2211;
const app = express();

app.set("view engine", 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded());

const dbconnection = require('./config/db.connect')
dbconnection();

app.listen(port, () => {
    console.log(`server start At http://localhost:${port}`);
})

app.use('/', require('./routes/moiveroute'))

