import mongoose from "mongoose";
import * as dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import dgram from "node:dgram";

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
dotenv.config();

app.use("/", routes);

const server = dgram.createSocket("udp4");

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.on("message", (msg, rinfo) => {
  console.log("Recieved UDP message");
});

server.bind(4000, process.env.IPv4_ADDRESS);

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Listening on port ${port}`);
    })
    .catch((error) => {
      console.log(error);
    });
});
