const router = require('express').Router();

router.post('/question', async (req, res, next) => {
  const data = req.body;
  let dataOne;
  //===========================
  if (data.select === 'Кино');
  dataOne = await cinema.findOne({ where: { id: 1 } });
  dataOne.dataValues.name = 'cinema';
  res.render('/qestion');
});

module.exports = router;
