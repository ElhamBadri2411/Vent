import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from "dotenv";
import messageRoutes from './routes/messagesRoutes.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/message", messageRoutes);

const PORT = process.env.PORT;

app.get('/', (req, res) =>{
  res.send("API test")
})

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    //listens
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

