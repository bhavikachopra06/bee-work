const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


const products = [
    { name: 'Product 1', description: 'Description of Product 1', image: 'images/product1.jpg' },
    { name: 'Product 2', description: 'Description of Product 2', image: 'images/product2.jpg' },
    { name: 'Product 3', description: 'Description of Product 3', image: 'images/product3.jpg' }
];


app.get('/catalog', (req, res) => {
    res.render('catalog', { products });
});


app.get('/upload', (req, res) => {
    res.render('upload');
});


const storage = multer.diskStorage({
    destination: 'public/images', 
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    }
});
const upload = multer({ storage });


app.post('/upload', upload.single('productImage'), (req, res) => {
    res.send('Image uploaded successfully!');
});

app.get('/', (req, res) => {
    res.redirect('/catalog'); 
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
