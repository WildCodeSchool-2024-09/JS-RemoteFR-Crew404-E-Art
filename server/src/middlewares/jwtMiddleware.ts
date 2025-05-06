import "dotenv/config";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import authRepository from "../modules/auth/authRepository";

// Vérification immédiate de la variable d'environnement
const APP_SECRET = process.env.APP_SECRET;
if (!APP_SECRET) {
  throw new Error("APP_SECRET is not defined");
}

// Interface pour le payload JWT
interface JwtPayload {
  email: string;
}

// Fonction pour créer un token JWT
const createToken = (payload: object): string => {
  return jwt.sign(payload, APP_SECRET, { expiresIn: "1h" });
};

// Middleware de vérification du token JWT
const verifyToken: RequestHandler = async (req, res, next) => {
  const token = req.cookies?.jwtToken;
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, APP_SECRET) as JwtPayload;
    const user = await authRepository.read(decoded.email);

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Export des fonctions sous forme d'objet structuré
export default { createToken, verifyToken };
