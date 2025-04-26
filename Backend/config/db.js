import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({
    path:".env"
});

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL)
            .then(() => {
                console.log('Connected to MongoDB Successfully!');
              })
              .catch((err) => {
                console.error('Error connecting to MongoDB:', err);
                process.exit(1);
            });
};

export default dbConnection;
