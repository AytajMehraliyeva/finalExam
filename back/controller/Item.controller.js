const { ProductModel } = require("../model/Item.model")

const ItemController={
    getAll:async(req,res)=>{
        try{
            const item=await ProductModel.find()
            res.send(item)
        }catch(error){
res.send('An occures while getting items')
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target=await ProductModel.findById(id)
            res.send(target)
        }catch(error){
res.send('An occures while getting by ID item')
        }
    },

    add:async(req,res)=>{
        try{
            const {name,price,desc,img}=req.body
            const newItem=new ProductModel({name,price,desc,img})
            await newItem.save()
            res.send(newItem)
        }catch(error){
            res.send('An occures while adding')
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await ProductModel.findByIdAndDelete(id)
            res.send('Item deleted')
        }catch(error){
            res.send('An occures while deleting item')
        }
    }
}

module.exports={ItemController}