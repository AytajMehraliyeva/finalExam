const cors=require('cors')
const express=require('express')
require('dotenv').config()
const mongoose =require('mongoose')

const ProductRouter=require('./routing/Item.router')
const PORT=process.env.PORT || 2000
const app=express()

app.use(cors())
app.use(express.json())
app.use('/item', ProductRouter)



mongoose.connect('mongodb+srv://gulshen:program2022@cluster0.fg9rwde.mongodb.net/RelationalDatabase').then(res=>{
    console.log('Connect to db')
})

app.listen(PORT,()=>{
    console.log('App runinig')
})