const express = require('express');
const Routers = express.Router();
const {getAllMission,postMission,deleteMission,updateMission,getDetailMission} = require('../controller/controllerMission');

Routers.get("/getAllMission",getAllMission);
Routers.post("/post/mission",postMission);
Routers.patch("/update/mission/:id",updateMission);
Routers.delete("/delete/mission/:id",deleteMission);
Routers.get("/getDetailMission/:id",getDetailMission);


module.exports = Routers;