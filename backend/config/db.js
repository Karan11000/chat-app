const mongoose = require("mongoose");

// mongoose setup

const connectDB = async ()=>{
  console.log(process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: true,
        });
    
        console.log(`MongoDB Connected: ${conn.connection.host}`); 
      } catch(err){
        console.log(`Error: ${error.message}`);
        process.exit();
      }
};

module.exports = connectDB;   