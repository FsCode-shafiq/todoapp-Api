exports.getUser = async (req,res)=>{
    res.json({ sucess: true, message: "User router work fine" })
}
exports.getUserById = async (req,res)=>{
    const {id} = req.params;
    res.json({sucess: true, message: `requested ID is: ${id}`});
}