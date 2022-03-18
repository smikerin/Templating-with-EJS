const express = require('express');
const app = express();
const port = 3000;
 
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index',{'title':title});
});

app.get('/190E', (req, res) => {
  var title = '190E Page';
  res.render('pages/190E',{'title':title});
});

app.get('/500E', (req, res) => {
  var title = '500E Page';
  res.render('pages/500E',{'title':title});
});

app.get('/560SEC', (req, res) => {
  var title = '560SEC Page';
  res.render('pages/560SEC',{'title':title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
