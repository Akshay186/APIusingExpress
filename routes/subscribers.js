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
router.get('/:id',getSubscriber, (req,res)=>{
    res.json(res.subscriber)
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
router.patch('/:id',getSubscriber, async (req,res)=>{
    if(req.body.name!=null){
        res.subscriber.name=req.body.name
    }
    if(req.body.name!=null){
        res.subscriber.subscribedTo=req.body.subscribedTo
    }
    
    try{
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})
//deleting one
router.delete('/:id',getSubscriber, async(req,res)=>{
    try{
        await res.subscriber.remove()
        res.json({message: 'Deleted Subscriber'})
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

async function getSubscriber(req, res, next){
    let subscriber
    let id = req.params.id
    try{
        subscriber = await Subscriber.findById(id)
        if(subscriber==null){
            return res.status(404).json({message: 'User does not exist'})
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }
    
    res.subscriber = subscriber
    next()
}

module.exports=router