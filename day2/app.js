const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

const products = [
    { name: 'Dog Food', price: 20 },
    { name: 'Cat Toy', price: 15 },
    { name: 'Bird Cage', price: 30 },
    { name: 'Fish Tank', price: 50 }
  ];

  app.get('/', (req, res) => {
    res.redirect('/products'); 
  });
  
  
  app.get('/products', (req, res) => {
    const search = req.query.search;
    let filteredProducts = products;
 
    if (search) {
      filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    res.render('products', { products: filteredProducts, search });
  });
  
  app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
  });
  
  

