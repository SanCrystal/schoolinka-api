import express from "express";
import {
  createUser,
  getUserByID,
  getAllUsers,
  updateUserByID,
  deleteUserByID,
} from "../controller/users.js";

const router = express.Router();

// create a new User
router.post("/", createUser);
// get all Users
router.get("/", getAllUsers);
// get User post by ID
router.get("/:id", getUserByID);
// update User post by ID
router.patch("/:id", updateUserByID);
// delete User post by ID
router.delete("/:id", deleteUserByID);

export default router;
