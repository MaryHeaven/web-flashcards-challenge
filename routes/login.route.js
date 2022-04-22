const router = require('express').Router();

<<<<<<< HEAD
router.get('/', (req, res) => {
  res.render('login');
});


=======
router.get('/login', (req, res) => {
  res.render('login');
});

>>>>>>> 8400e180aee3eba473caa9d9496d0053399e1da1
module.exports = router;
