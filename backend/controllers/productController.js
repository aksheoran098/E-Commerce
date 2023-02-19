const { findByIdAndUpdate } = require("../models/productModel");
const Product  = require("../models/productModel");


// create Products --- Admin
// req.body is forms data ----- post put
// url parameter are params --- get
// req.query ------------------ get

exports.createProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success : true,
        product
    })
}
// Get all Products
exports.getAllProducts  = async (req,res) => {
    const product = await Product.find();
    res.status(200).json({
        success : true,
        product
    })  
}

// Update a Product --- Admin

// doubt params, exportkb use krna h
// findByIdAndUpdate me kya kuch dena imp hai

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        res.status(500).json({
            success : false,
            message : "Product not found."
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body
            ,{new : true            // update value return krne ke liye
            ,runValidators : true   // doubt?? koi change hi niii feel hua
            ,useFindAndModify : false  // doubt?? 
            }
        )
console.log("updated name : ", req.body.name);
    res.status(200).json({
        success : true,
        product
    })
}

// Delete a Product --- Admin
 
exports.deleteProduct = async (req,res,next) => {
    const product = await Product.findById(req.params.id)
    if (!product ){
        res.status(500).json({
            success : false,
            message : "Product not found."
        })
    }
    await product.remove() 
    res.status(200).json({
        success : true,
        message : "Product deleted successfully."
    })
}

// Get single Product details
exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product ){
        res.status(500).json({
            success : false,
            message : "Product not found."
        })
    } 
    res.status(200).json({
        success : true,
        product
    })
}