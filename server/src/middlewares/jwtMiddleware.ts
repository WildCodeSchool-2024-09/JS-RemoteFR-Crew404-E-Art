import jwt from "jsonwebtoken";
import "dotenv/config";

// ici j'ai crée dans ma variable d'environnement un mot de passe  pour mon encodage de mon token
const JWT_SECRET = process.env.JWT_SECRET as string;

// ici je crée mon token avec le payload de mon utilisateur grace au package jsonwebtoken.

const createToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

// ici je vérifie mon token avec le mot de passe de mon utilisateur grace au package jsonwebtoken.
const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

export default { createToken, verifyToken };
