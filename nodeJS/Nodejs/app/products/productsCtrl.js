var productsCtrl = {};

var productSchema = require("mongoose").model("product");
productsCtrl.getProductsPage = function(req, res) {
    console.log('hshjhjsddsj',req);
    var sample=req.dody;
    productSchema.find(sample, function(err, data) {
        console.log(data);
        if (err) {
            res.send("<h1>Error occured</h1>")
        } else {
            res.json(data);
            // res.render("products/products", { products: data });
        }
    });
    // res.render("products/products", { products: products });

};
// productsCtrl.getTopTenProducts = function(req, res) {
//     var productCount = req.params.id;
//     var tenProducts = products.slice(0, productCount);
//     res.render("products/products", { products: tenProducts });
// }

// productsCtrl.create = function(req, res) {
//     console.log(req.body);
//     var product = req.body;
//     product.isAvailable = req.body.isAvailable == "on";
//     //Create the product document.
//     var productToInsert = new productSchema(product);

//     productToInsert.save(function(error, data) {
//         if (error) {
//             res.send("<h1>Product Not Created</h1>");
//         } else {
//             res.send("<h1>Product Created</h1>")
//         }
//     });

// };

// productsCtrl.getAllProducts = function() {
//     productSchema.find({}, function(err, data) {

//     });
// };

// productsCtrl.getProductById = function() {
//     var productId = 1;
//     productSchema.findById(productId, function(err, data) {

//     });
// };

// productsCtrl.searchProducts = function(req, res) {
//     var criteria = req.body;
//     productSchema.find(criteria, function(err, data) {
//         if (err) {
//             res.send("<h1>Error occured</h1>")
//         } else {
//             res.render("products/products", { products: data });
//         }
//     });
// };

// productsCtrl.insertProducts = function(req, res) {
//     productSchema.insertMany(products, function(err, data) {
//         if (err) {
//             res.send(error);
//         } else {
//             res.send("Successful");
//         }
//     })
// }

// productsCtrl.showAddProductsPage = function(req, res) {
//     res.render("products/addproduct");
// };

module.exports = productsCtrl;