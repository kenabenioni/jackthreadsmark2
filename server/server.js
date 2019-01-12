require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  massive = require("massive"),
  ctrl = require('./controller.js');
  const {MY_URL} = process.env;

  const app = express();
  const PORT = 3007;

  app.use(bodyParser.json());
//   app.use( express.static( `${__dirname}/../build` ) );
//   app.use(checksession)
  
  massive(MY_URL).then(db => {
      app.set('db', db);
      app.listen(PORT, () => console.log(`${PORT} is the port.`));
    })
    .catch(err => console.log(err));

    app.get('/api/getcl', ctrl.getClothings)