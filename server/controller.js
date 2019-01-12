module.exports = {
    getClothings: (req, res) => {
        const db = req.app.get("db");
        db.get_all_clothing()
          .then(clothing => {
            res.status(200).send(clothing);
            console.log(clothing);
          })
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
          });
      }
}