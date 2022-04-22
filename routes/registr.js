const { User } = require('../db/models');
const router = require('express').Router();
// const {}
router.get('/', (req, res) => {
  res.render('registr');
});

// router.post('/regs', (req, res) => {
//   const { login, password } = req.body;
//   console.log(login, password);
// });
router.post('/regs', async (req, res) => {
  const { login, password } = req.body;
  const login1 = await User.findAll({ where: { user_name: login } });
  // console.log(login, password);
  // if (!login || !password) {
  //   res.render('error', {
  //     layout: false,
  //     message: 'Ошибка! необходимо заполнить все поля',
  //   });
  // } else if (password.length < 8) {
  //   res.render('error', {
  //     layout: false,
  //     message: 'Ошибка! Пароль слишком короткий',
  //   });
  // } else if (login1) {
  //   res.render('error', {
  //     layout: false,
  //     message: 'Ошибка! данный гость уже есть',
  //   });
  // } else {
  const baza = await User.create({ user_name: login, password });
 
  // }
});

module.exports = router;
