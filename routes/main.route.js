const router = require('express').Router();

router.get('/', (req, res) => {
  // console.log('YA TUT');
  res.render('main');
})

module.exports = router;
