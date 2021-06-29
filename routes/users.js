const express = require('express');

const router = express.Router();


// @route  GET api/v1/users
// @desc   GET users
// @acces Public

const userData = [
    {
        name: 'shafiq',
        profession: 'developer',
        id : 1
    },
    {
        name: 'wassay',
        profession: 'developer',
        id : 2
    },
    {
        name: 'fs-code',
        profession: 'developer',
        id : 3
    }
]
router.get('/',(req,res)=>{
    res.send(userData)
})

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);
    const findUser = userData.filter(user => user.id == id);
    if(findUser.length !== 0){
        res.send({sucess: true , data: findUser});
    }
    else{
        res.status(404).send({sucess: false, message: 'user not found'})
    }
})

module.exports = router;