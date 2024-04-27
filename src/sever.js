const express = require('express');
const app = express();
require('dotenv').config();
require('./config/viewEngine');

const configViewEngine = require('./config/viewEngine');
const cors = require('cors');
const port = process.env.PORT;
const route = require('./routes/index');
const path = require('path');
app.use(cors());
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.static(path.join('./src', '/publics')));

configViewEngine(app);

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
