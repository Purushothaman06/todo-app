import User from "../../models/userModel.js";
import bcrypt from "bcrypt";

const signUpController = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Missing fields" });

  try {
    const newUser = await User.create({ username, password});
    res
      .status(201)
      .json({ message: "User created successfully", userId: newUser._id });
  } catch (err) {
    res.status(500).json({ error: "User already exists" });
  }
};

export default signUpController;
