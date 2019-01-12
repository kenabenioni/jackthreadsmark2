require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser");

  const app = express();
  const PORT = 3005;

  app.use(bodyParser.json());
  app.use( express.static( `${__dirname}/../build` ) );

app.listen(PORT, () => console.log(`${PORT} is the port.`));