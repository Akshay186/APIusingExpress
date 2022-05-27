const express = require('express')
const router = express.Router()

//geting all
router.get('/', (req,res)=>{
    res.send('Hello world!')
})
//geting one
router.get('/', (req,res)=>{
    
})
//creating one
router.post('/:id', (req,res)=>{
    
})
//updating one
router.patch('/:id', (req,res)=>{
    
})
//deleting one
router.delete('/:id', (req,res)=>{
    
})

module.exports=router