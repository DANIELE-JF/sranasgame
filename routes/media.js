const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('media', { title: 'Valorant Media', description: 'Semua berita terbaru terkait Valorant.' });
});
module.exports = router;