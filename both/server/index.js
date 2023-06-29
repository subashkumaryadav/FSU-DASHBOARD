import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";


//routers

import memberRoutes from "./routs/members.js";
import notesRoutes from "./routs/notes.js";
import noticesRoutes from "./routs/notices.js";
import studentRoutes from "./routs/student.js";
import complainRoutes from "./routs/complains.js";
import adminRoutes from "./routs/admin.js";
import addUserRoutes from './routs/addUser.js'

// CONFIGURATION

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Routes
app.use("/admin", adminRoutes);
app.use("/members", memberRoutes);
app.use("/notes", notesRoutes);
app.use("/notices", noticesRoutes);
app.use("/student", studentRoutes);
app.use("/complains", complainRoutes);
app.use("/addUser", addUserRoutes);

//   Mongoose Setup
  
  
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT,'0.0.0.0', () => {
      console.log(`Server is running at port ${PORT} `);
      
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
