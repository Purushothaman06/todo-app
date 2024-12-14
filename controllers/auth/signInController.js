import tokenUtils from "../../utils/tokenUtils.js";
import User from "../../models/userModel.js";

const signInController = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Missing fields" });

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const token = tokenUtils.generateToken(user._id);
    const refreshToken = tokenUtils.generateRefreshToken(user._id);

    res.cookie("token", token, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default signInController;
