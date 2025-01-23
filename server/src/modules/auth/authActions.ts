import type { RequestHandler } from "express";

// Import access to data
import authRepository from "./authRepository";

// The B of BREAD - Browse (Read All) operation
const register: RequestHandler = async (req, res, next) => {
  try {
    const user = await authRepository.create(req.body);

    // Respond with the items in JSON format
    res.status(201).json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await authRepository.read(req.body.email);

    if (!user) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    if (user.password !== req.body.password) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    // Respond with the items in JSON format
    res.status(200).json(req.user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
export default { register, login };
