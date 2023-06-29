import express  from "express";
import {getNotices} from "../controllers/notices.js";


const router = express.Router();
router.get("/notices",getNotices);

export default router;


