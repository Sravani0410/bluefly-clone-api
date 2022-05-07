const express = require("express")

const router = express.Router();

const Users=require("../models/user.models")
router.post("",async(req,res)=>{
    try{
        const user=await Users.create(req.body)
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const user=await Users.find().lean().exec()
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const user=await Users.findById(req.params.id).lean().exec()
        return res.status(200).send(user)
    }

    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const user=await Users.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const user=await Users.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

module.exports = router;