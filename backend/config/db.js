import mongoose from 'mongoose';

const ConnectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err.message);
        process.exit();
    }
}

export default ConnectDB;