const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')


//geting all
router.get('/',  async (req,res)=>{
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }catch(error){
        res.status(500).json({message : error.message})
    }
})
//geting one
router.get('/:id', (req,res)=>{
    res.send(req.params.id)
})
//creating one
router.post('/', async (req,res)=>{
    
    console.log(req.body)
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedTo: req.body.subscribedTo
    })
    console.log(subscriber.name)
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})
//updating one
router.patch('/:id', (req,res)=>{
    
})
//deleting one
router.delete('/:id', (req,res)=>{
    
})

module.exports=router