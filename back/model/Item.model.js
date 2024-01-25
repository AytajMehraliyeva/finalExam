const mongoose=require('mongoose')

const ProductModel=mongoose.model('ProdutModel', new mongoose.Schema({
    name:String,
    img:String,
    desc:String,
    price:Number
}))

module.exports={ProductModel}