import { connect } from "mongoose"

export const connectDB = async()=>{
    try {
        await connect(`${process.env.MONGODB_URL}/Quiz_System`)
    } catch (error) {
        console.log('connecting to MongoDB Failed: ',error);
    }
}