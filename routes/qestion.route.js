const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    console.log('zahody');
    res.render('/qestion');
  });

module.exports = router;
