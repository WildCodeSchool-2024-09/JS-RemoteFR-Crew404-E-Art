import type { RequestHandler } from "express";
import jwtMiddleware from "../../middlewares/jwtMiddleware";

// Import access to data
import authRepository from "./authRepository";

// Register a new user
const register: RequestHandler = async (req, res, next) => {
  try {
    const user = await authRepository.create(req.body);

    if (!user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Respond with the items in JSON format
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

const login: RequestHandler = async (req, res, next) => {
  try {
    if (req.user) {
      const { password, ...userWithoutSensitiveInfo } = req.user;
      const token = jwtMiddleware.createToken(userWithoutSensitiveInfo);
      res.cookie("jwtToken", token).status(200).json(userWithoutSensitiveInfo);
    }
  } catch (err) {
    next(err);
  }
};

const logout: RequestHandler = async (req, res, next) => {
  try {
    res.clearCookie("jwtToken").status(200).json({ message: "Logged out" });
  } catch (err) {
    next(err);
  }
};

export default { register, login, logout };
