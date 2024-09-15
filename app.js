const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' })); 
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

const homeRouter = require('./routes/home');
const mediaRouter = require('./routes/media');
const supportRouter = require('./routes/support');

app.use('/', homeRouter);
app.use('/media', mediaRouter);
app.use('/support', supportRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server sedang berjalan di http://localhost:${PORT}`);
});

app.set('views', path.join(__dirname, 'views'));