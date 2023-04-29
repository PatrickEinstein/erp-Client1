import express from 'express';
import  getThisUser from "../controller/getUser.js"
import { getAllUsers } from '../controller/getUser.js';

const router = express.Router()



 router.post("/thisuser", getThisUser);
 router.get("/alluser", getAllUsers);

 export default router

//  "proxy" : "https://localhost:5000",