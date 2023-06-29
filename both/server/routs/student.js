import express from "express";
import { getStudent } from "../controllers/student.js";

const router = express.Router();
router.get("/student",getStudent);

export default router;