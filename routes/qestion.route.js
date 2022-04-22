const router = require('express').Router();
const { Theme } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const x = await Theme.findAll({ raw: true, attributes: ['question'] });
    const firstQues = x.slice(0, 10);
    const secondQues = x.slice(11, 21);
    const thirdQues = x.slice(20, 30);
  
    console.log(thirdQues);
    res.render('/qestion');
  });

module.exports = router;
