require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  ctrl = require('./controller.js');
  let {MY_URL, SESSION_SECRET, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET} = process.env;

  const app = express();
  const PORT = 3007;

  app.use(express.json());
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    })
  );

  app.get("/auth/callback", async (req, res) => {
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };
    let resWithToken = await axios.post(
      `https://${REACT_APP_DOMAIN}/oauth/token`,
      payload
    );
  
    let resWithUserData = await axios.get(
      `https://${REACT_APP_DOMAIN}/userinfo/?access_token=${
        resWithToken.data.access_token
      }`
    );
    req.session.user = resWithUserData.data;
    console.log(req.session.user);
    res.redirect("/");
  });
  
  app.get("/api/user-data", (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("bob marley");
    }
  });
  
  app.get('/logout', (req, res)=>{
      req.session.destroy();
      res.redirect('http://localhost:3000/#/')
  })
  
  massive(MY_URL).then(db => {
      app.set('db', db);
      app.listen(PORT, () => console.log(`${PORT} is the port.`));
    })
    .catch(err => console.log(err));

    app.get('/api/getcl', ctrl.getClothings)
    app.get("/api/clothing", ctrl.getItem) 