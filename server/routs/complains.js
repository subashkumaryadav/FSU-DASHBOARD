import express  from "express";
import {getComplains} from "../controllers/complains.js"


const router = express.Router();
router.get("/complains",getComplains);
export default router;


