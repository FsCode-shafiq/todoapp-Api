const {TodoModel} = require('../models');

exports.getTodos = async (req,res)=>{
    const {id} = req.user;
    console.log(id);
    try {
        const task = await TodoModel.find({createdBy:id}).populate("createdBy",{password: 0});
        console.log(task);
        console.log(task.lenght);
        if(task.lenght<1){
            return res.send({
                sucess: false,
                message: "you dont have any task"
            })
        }
        res.send({
            sucess: true,
            task
        })
    } catch (error) {
        console.log("internal server error: ", error.message);
    }
}

exports.createTodo = async(req,res)=>{
    const {title,description,isCompleted} = req.body;

    try {
        const todo = await TodoModel.create({
            title,
            description,
            isCompleted,
            createdBy: req.user.id,
        });
        todo.save();
        res.send({
            sucess: true,
            message: "User todo create sucessfully!",
            todo,
        })
    } catch (error) {
        console.log("internal server error: ", error.message);
    }
}