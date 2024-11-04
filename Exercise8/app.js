const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.render('index'); 
  });
  


app.get('/contact', (req, res) => {
  res.render('contact', { error: null, data: {} }); 
});


app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.render('contact', { error: 'All fields are required!', data: req.body });
  }

  res.render('thankyou', { name, email, message });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
