const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    console.log('zahody');
  });

module.exports = router;
