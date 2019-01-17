require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  ctrl = require('./controller.js');
  let {MY_URL, SESSION_SECRET, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, LOCAL_HOST} = process.env;

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
  app.use( express.static( `${__dirname}/../build` ) );

  app.get('/auth/callback', async (req, res) => {
    // req.query = { code: someValue } ---> req.query.code
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    }
  
    // post request for access token, send code in body of request
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    // get request for user data, send access token
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
  
    req.session.user = resWithUserData.data;
    res.redirect('/')
  })
  
  app.get('/api/user-data', (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send('Shnopes')
    }
  })
  
  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect(LOCAL_HOST)
  })
  
  massive(MY_URL).then(db => {
      app.set('db', db);
      app.listen(PORT, () => console.log(`${PORT} is the port.`));
    })
    .catch(err => console.log(err));

    app.get('/api/getcl', ctrl.getClothings)
    app.get("/api/clothing", ctrl.getItem) 