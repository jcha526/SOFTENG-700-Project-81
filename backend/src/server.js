import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import express from 'express';
// import routes from './routes/index.js'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
dotenv.config();


// app.use('/', routes)

app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {console.log(`Listening on port ${port}`);})
    .catch((error) => {
        console.log(error);
    });
})


