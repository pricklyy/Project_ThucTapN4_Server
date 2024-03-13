const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const missionRoutes = require('./router/missionRoutes');
const authRoute = require('./router/auth');
const userRoute = require('./router/user');


const app = express();
app.use(bodyParser.json());
const port = 3000;

mongoose.connect('mongodb://localhost:27017/thuctap1',{useNewUrlParser: true }).then(() => {
    console.log('Connect completed');
}).catch((err) => {
    console.log(`Connect failed ${err}`);
})

app.use('/Api',missionRoutes);
app.use("/Api", authRoute);
app.use("/Api", userRoute);
app.listen(port,() => {
    console.log(`Server is running at the ${port}`);
})