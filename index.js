 var express = require('express'),
        cors = require('cors'),
         app = express();

app.use(express.bodyParser());
app.use(cors());

app.set('port', (process.env.PORT || 3000))

// in-memory datastore for demonstration purposes
var products = [];
products.push({ id: 1, name: 'Apple' });
products.push({ id: 2, name: 'Dell' });
products.push({ id: 3, name: 'Lenovo' });
products.push({ id: 4, name: 'HP' });
products.push({ id: 5, name: 'ASUS' });
products.push({ id: 6, name: 'Razer' });
products.push({ id: 7, name: 'Samsung' });
products.push({ id: 8, name: 'Microsoft' });

app.get('/', function (req, res) {
    res.send('Product API is running on /api/products endpoint');
});

// GET: Index
app.get('/api', function (req, res) {
    res.send('Ping? pong!');
});

// GET: List all products
app.get('/api/products', function (req, res) {
    res.contentType('application/json');
    res.send(products);
});

// GET: Products on ID
app.get('/api/products/:id', function (req, res) {
    res.contentType('application/json');
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == req.params.id) {
            return res.send(products[i]);
        }
    }
});

// POST: Create a product
app.post('/api/products', function (req, res) {
    var randomId = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var product = { id: randomId(10, 100), name: req.body.productname };
    products.push(product);
    res.send(product);
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})