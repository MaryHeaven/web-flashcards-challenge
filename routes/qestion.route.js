const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    res.render('/qestion');
  });

module.exports = router;
