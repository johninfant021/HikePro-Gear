const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Token required" });
  }
  try {
    const decoded = jwt.verify(token, "mysecret");
    req.user = decoded;
    next();
  } catch(err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = authMiddleware;
