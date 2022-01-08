var express = require("express");
var router = express.Router();
var db = require("../config/database");

router.get("/", function (req, res, next) {
  const searchParam = req.query.query;

  db.query("SELECT * FROM `movie` WHERE `title` LIKE :query", {
    replacements: { query: '%'+ searchParam + '%' },
    type: db.Sequelize.QueryTypes.SELECT,
  }).then(function (movies) {
    const result = {
      page: 1,
      results: movies,
          total_pages: 1,
          total_results: 2,
        };
    res.json(result);
  });
});

module.exports = router;
