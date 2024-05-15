import mongoose from "mongoose";

export  async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('MongoDB connected');
        })

        connection.on('error',(error)=>{
            console.log('MongoDB connection error, Please make sure db is up and running');
            console.log(error)
            process.exit()
        })


    } catch (error) {
        console.log('Something went wrong in connecting with DB')
    }
}