import type { NextFunction, Request, Response } from "express";
import authRepository from "../modules/auth/authRepository";

const authMiddleware = {
  async isRegistered(req: Request, res: Response, next: NextFunction) {
    const user = await authRepository.read(req.body.email);

    if (!user) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    if (user.password !== req.body.password) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }
    req.user = user;
    next();
  },
};
export default authMiddleware;
