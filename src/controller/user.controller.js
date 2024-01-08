import mongoose from "mongoose";
import { ApiError } from "../utiles/ApiError.js";
import { ApiResponse } from "../utiles/Apiresponse.js";
import asyncHandler from "../utiles/asyncHandler.js";
import usermodal from "../model/user.model.js";
const registerUser = asyncHandler(async (req, res) => {
  // Destructuring the request body to extract specific user registration information
  // These variables (fullName, email, username, password) will hold the values sent from the client
  const { fullName, email, username, password } = req.body;
  if (fullName && email && username && password === "") {
    throw new ApiError(400, "all field are required");
  }
  const exitsedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (exitsedUser) {
    throw new ApiError(409, "user with usename and email is already exists");
  }
  const entry = await User.create({
    fullName,
    email,
    password,
    username,
  });
  const creatUser = await User.findByid(entry._id);
  if (!creatUser) {
    throw new ApiError(500, "something went wrong with creating user");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, creatUser, "user registered successfully"));
});

export { registerUser };
