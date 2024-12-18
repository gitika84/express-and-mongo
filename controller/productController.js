const Product = require('../models/productModel');

const getProducts = async(req , res) => {
    try{
        const allProducts = await Product.find();

        if(!allProducts || allProducts.length === 0){
            res.json({
                message: "There is no product"
            })

        }
    }
    catch(err){
        res.status(500).json({
            success : false,
            message : "Internal  server error"
        })
    }
}

const createProduct = async(req, res) => {
    try{
        const { name , price , description , category } = req.body;
        const newProduct = new Product({ name , price , description , category } )
        await newProduct.save();
        res.status(200).json({
            product: newProduct
        })
    }catch(err){
        res.status(500).json({
            success : false,
            message : " "
        })
    }
}


const UpdateProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const { name , price , description , category } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate( id, { name , price , description , category } , { new: true})
        res.status(200).json({
            product : updatedProduct
        })
    }catch(err){
        res.status(500).json({
            success : false,
            message : " "
        })
    }
}

const deleteProduct = async(req, res) =>{
    try{
        const {id} = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)

        res.status(200),json({
            message: "deleted product SuccessFully",
            product: deletedProduct
        })
    }catch(err){
        res.status(500).json({
            success : false,
            message : " "
        })
    }
}


module.exports = { getProducts , UpdateProduct , createProduct, deleteProduct}