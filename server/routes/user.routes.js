// import express from "express";
// import {
//   createUser,
//   getUserInfoByID,
//   updatesUser,
// } from "../controllers/user.controller.js";
// import verifyToken from "../middleware/verifyToken.js";

// const router = express.Router();

// router.post("/", verifyToken, createUser);
// router.get("/:id", verifyToken, getUserInfoByID);
// router.patch("/:id", verifyToken, updatesUser);

// export default router;




import express from 'express';
import { createUser, getUserInfoByID, updateUser } from '../controllers/user.controller.js';
import verifyToken from '../middleware/verifyToken.js';  // Import the middleware

const router = express.Router();

// Use verifyToken middleware on protected routes
router.post('/users', createUser);  // Protect create user route
router.get('/users/:id', getUserInfoByID);  // Protect get user by ID route
router.put('/users/:id', updateUser);  // Protect update user route

export default router;





