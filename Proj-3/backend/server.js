require('dotenv').config()

const app = require("./src/app")
const connectDB = require("./src/db//db")

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();   // wait for DB connection
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect DB:", err);
        process.exit(1);
    }
};

startServer();
