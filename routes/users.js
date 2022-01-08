var express = require('express');
var router = express.Router();


/* GET users listing. */
router.use((req, res, next) =>{
  console.log("middleware users")
  next()
})
router.use((req, res, next) =>{
  console.log("middleware users")
  next()
})

router.get('/', function(req, res, next) {

  const users = [
    {
      id:1,
      name: "Ivan"
    },
    {
      id: 2,
      name: "Vasyl"

    }
  ]
  res.json(users);

});

module.exports = router;
