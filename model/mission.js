const mongoose = require('mongoose');
const MissionSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default:Date.now,
      
    },
    level: {
        type: String,
        require: true
    },
    point: {
        type: Number,
        require: true
    }
})

const Mission = mongoose.model('mission', MissionSchema);
module.exports = Mission;