const router = require('express').Router()
const { Theme } = require('../db/models');

router.route('/')
  .get( async (req, res) => {
    const x = await Theme.findAll({ raw: true, attributes: ['question'] });
    const arr = [];
    console.log(x);
    res.render('/qestion');
  });

module.exports = router;
  
  
//   x.forEach((el) => {
//     if (el.question.length === data.length) {
//       const dataFromBD = el.question.split('').sort().join('');
//       const dataFromInput = data.split('').sort().join('');
//       if (dataFromBD === dataFromInput) {
//         arr.push(el);
//       }
//     }
//   });
//   return arr;
// }
