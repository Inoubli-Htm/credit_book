const jwt = require("jsonwebtoken");

// Middleware pour vérifier le token JWT
const authMiddleware = (req, res, next) => {
  // Récupérer le token depuis le header
  const token = req.header("Authorization");

  // Vérifier si le token existe
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Vérifier le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ajouter les infos utilisateur décodées à la requête
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
