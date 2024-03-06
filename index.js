const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const routes = require('./router/routes');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ extended: false })
);

app.use(routes);

app.listen(port, () => console.log(`server running in port ${port}`))