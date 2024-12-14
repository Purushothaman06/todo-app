import tokenUtils from "../../utils/tokenUtils.js";

const refreshController = (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken)
    return res.status(401).json({ error: "Missing refresh token" });

  try {
    const newToken = tokenUtils.generateTokenFromRefresh(refreshToken);
    res.cookie("token", newToken, { httpOnly: true });
    res.json({ message: "Token refreshed" });
  } catch (err) {
    res.status(403).json({ error: "Invalid refresh token" });
  }
};

export default refreshController;
