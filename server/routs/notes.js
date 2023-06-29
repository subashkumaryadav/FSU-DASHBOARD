import express  from "express";
import getNotes from "../controllers/notes.js";


const router = express.Router();
router.get("/notes",getNotes);
export default router;


