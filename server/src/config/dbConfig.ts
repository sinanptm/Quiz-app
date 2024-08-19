import { connect } from "mongoose"

export const connectDB = async()=>{
    try {
        await connect(`${process.env.MONGO_URL}/Quiz_System`)
    } catch (error) {
        
    }
}