// import mongoose from 'mongoose';

// const connectMongoDB = async () =>{
//     try {
//        await mongoose.connect(process.env.MONGO_URI);
//         console.log('Connected to MongoDB')
//     } catch (error) {
//         console.log(error)
        
//     }
// }
 
// export default connectMongoDB;

import mongoose from 'mongoose';

let isConnected;

const connectMongoDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectMongoDB;
