const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('avtor');
});

module.exports = router;