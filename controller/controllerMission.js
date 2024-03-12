const Mission = require ('../model/mission');


const getAllMission = async(req,res) => {
    try {
        const mission = await Mission.find();
        res.json(mission);
    } catch (error) {
        console.log(error);
    }
}

const getDetailMission = async(req,res) => {
    const missionId = req.params.id;
    try {
        const mission = await Mission.findById(missionId);
        res.json(mission)
    } catch (error) {
        console.log(error)
    }
}

const postMission = async (req,res) => {
    const mission = new  Mission({
        title:req.body.title,
        description:req.body.description,
        date:req.body.date,
        level:req.body.level,
        point:req.body.point,
    })
    try {
        const newMission = await mission.save();
        res.status(201).json(newMission);
    } catch (error) {
        console.log(error);
    }
}

const deleteMission = async(req,res) => {
    try {
        const id = req.params.id;
        const result = await Mission.findByIdAndDelete(id);
        if(result) {
            res.json({message: "Delete complete"})
        } else {
            res.status(404).json({message:`Ko tim thay  nhiem vu co ${id} de xoa`})
        }
    } catch (error) {
        res.status(500).json({message: 'Bugs'})
    }
}

const updateMission = async(req,res) => {
    const missionId = req.params.id;
    const updateData = req.body;
    try {
        const result = await Mission.findByIdAndUpdate(missionId,updateData,{new :true});
        if(result){
            res.json({message: "Update thanh cong",data:result})
        } else {
            res.status(404).json({message : `Ko tim thay  nhiem vu co ${missionId} de update`})
        }
    } catch (error) {
        res.status(500).json({message : 'Bugs'})
    }
}

module.exports = {getAllMission,postMission,deleteMission,updateMission,getDetailMission};