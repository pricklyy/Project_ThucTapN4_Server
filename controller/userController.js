const User = require("../model/User");

const userController = {
    //Get all User
    getAllUser: async (req, res)=>{
        try {
            const user = await User.find();
            res.status(200).json(user)
        }catch (err){
            res.status(500).json(err)
        }
    },

    //update NumberPhone, wallID, xKey
    updateUser: async (req, res) => {
        try {
            const updateID = req.params.id;
            console.log(updateID)
            const updateData = req.body;
            const result = await User.updateOne({_id: updateID}, updateData);
            console.log(result);
            res.json({updateCount: result.nModified});
        } catch (err) {
            res.status(500).json(err);
        }
    }
,


    //Delete user
    deleteUser: async (req, res)=>{
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successfully");
        }catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = userController;
