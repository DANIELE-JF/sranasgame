const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Valorant',
    imagePath: 'public/images/3037928.jpg',
    buttonText: 'Main Gratis',
  });
});

module.exports = router;