import express from 'express'
import getThisUser, { getAllUsers } from '../controller/getUser.js'

const router = express.Router()

router.get("/alluser", getAllUsers)
router.post("/thisuser", getThisUser)

export default router