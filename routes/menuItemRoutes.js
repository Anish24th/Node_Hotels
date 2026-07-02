const express= require('express');
const router=express.Router();
const menuItem= require('../models/menuItem');

router.post('/',async(req,res)=>{
   
   try{
    const data = req.body;

   const newMenu = new menuItems(data);

  const response = await newPerson.save();

  console.log('Data saved');
  res.status(200).json(response);
   }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server error'});
   }
})

router.get('/',async(req,res)=>{
    try{
    const data= await menuItem.find();
    console.log('Data fetched');
    res.status(200).json(data);

    }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server error'});    
    }
})

router.get('/:TasteType',async(req,res)=>{
try{
const workType=req.params.workType;
if(workType=='sour'||workType=='sweet'||workType=='spicy'){

const response = await menuItem.find({taste: workType});
console.log('Data fetched');
res.status(200).json(data);

}else{

res.status(400).json({error : 'Invalid work type'});

}
}catch(err){
console.log(err);
res.status(500).json({error : 'Internal server error'});
}
})

module.exports=router;