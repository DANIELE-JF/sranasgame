const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('support', { title: 'Support', description: 'Bantuan terkait permainan Valorant.' });
});

module.exports = router;