import express from "express";
import getPdf from "../controller/get-post-pdf.js";
import PostPdf from "../controller/get-post-pdf.js";
import getThisUser from "../controller/getUser.js";
import { getAllUsers } from "../controller/getUser.js";

const router = express.Router();

router.post("/thisuser", getThisUser);
router.get("/alluser", getAllUsers);
router.get("/pdf", getPdf);
router.post("/pdf", PostPdf);

export default router;

//  "proxy" : "https://localhost:5000",
