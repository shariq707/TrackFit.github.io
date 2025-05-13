// import User from "../models/user.model.js";
// import asyncHandler from "express-async-handler";
// import "dotenv/config";

// const createUser = asyncHandler(async (req, res) => {
//   const { name, email, avatar, uid } = req.body;

//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     return res.status(200).json(userExists);
//   }

//   const newUser = await User.create({
//     name,
//     email,
//     avatar,
//     uid,
//   });

//   res.status(201).json(newUser); // 201 for resource created
// });

// const getUserInfoByID = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   const user = await User.findOne({ _id: id });

//   if (user) {
//     res.status(200).json(user);
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// const updatesUser = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const { name, gender, age, height, weight, avatar } = req.body;

//   const updateUser = await User.findOneAndUpdate(
//     { _id: id },
//     { name, gender, age, height, weight, avatar },
//     {
//       new: true,
//     }
//   );

//   if (!updateUser) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(updateUser);

//   // res.status(500).json({ message: "Internal server error" });
// });

// export { createUser, getUserInfoByID, updatesUser };















import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import "dotenv/config";
// import verifyToken from "../middlewares/verifyToken.js"; // Importing the verifyToken middleware

// Create a new user
// 

const createUser = asyncHandler(async (req, res) => {
  let { name, email, avatar, uid } = req.body;

  // Validate required field
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Default values for optional fields
  name = name || "New User";
  avatar = avatar || "";
  uid = uid || "";

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(200).json(userExists);
  }

  // Create user
  const newUser = await User.create({
    name,
    email,
    avatar,
    uid,
  });

  res.status(201).json(newUser);
});



// Get user information by ID
const getUserInfoByID = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Find the user by ID in the database
  const user = await User.findOne({ _id: id });

  if (user) {
    // If the user is found, respond with the user data
    res.status(200).json(user);
  } else {
    // If the user is not found, respond with a 404 error
    res.status(404).json({ message: "User not found" });
  }
});

// Update user information
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, gender, age, height, weight, avatar } = req.body;

  // Update user details in the database
  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    { name, gender, age, height, weight, avatar },
    {
      new: true, // Return the updated user object
    }
  );

  if (!updatedUser) {
    // If user is not found for update, send a 404 error
    return res.status(404).json({ message: "User not found" });
  }

  // Respond with the updated user data
  res.status(200).json(updatedUser);
});

export { createUser, getUserInfoByID, updateUser };
