module.exports = {
    getClothings: (req, res) => {
        const db = req.app.get("db");
        db.get_all_clothing()
          .then(clothing => {
            res.status(200).send(clothing);
          })
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
          });
      },
      getItem: (req, res) => {
        const db = req.app.get("db");
        const { id, img } = req.query;
        db.get_item({ id, img })
          .then(product => {
            res.status(200).send(product);
          })
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
          });
      }
}