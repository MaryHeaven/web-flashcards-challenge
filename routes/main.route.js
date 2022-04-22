const router = require('express').Router();

router.get('/', (req, res) => {
  // console.log('YA TUT');
  res.render('main');
});
router.post('/main', (req, res) => {
  const { themes } = req.body;
});

module.exports = router;
