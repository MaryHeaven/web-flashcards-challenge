const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    console.log('zaashla');
    res.render('static');
  });

module.exports = router;
