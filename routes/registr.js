const router = require('express').Router();
// const {}
router.get('/', (req, res) => {
  res.render('registr');
});

router.post('/regs', (req, res) => {
  const { login, password } = req.body;
  // console.log(login, password);
});
module.exports = router;
