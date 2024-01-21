const mongoose = require('mongoose');
const connnections=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 500, 
        connectTimeoutMS: 10000,  
    })
    console.log('MongoDB Connected')	
} catch (err) {
    console.error("An error occurred while connecting to the DB:", err.message);
}
}
module.exports={connnections}