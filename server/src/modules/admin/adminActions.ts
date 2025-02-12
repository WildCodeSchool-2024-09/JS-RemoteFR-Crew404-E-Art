import type { RequestHandler } from "express";
import oeuvreRepository from "../oeuvre/oeuvreRepository";
import userRepository from "../user/userRepository";

// Browse all users and artworks
const browseAdmin: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.readAll();
    const oeuvres = await oeuvreRepository.readAll();
    res.status(200).json({ users, oeuvres });
  } catch (error) {
    next(error);
  }
};

const readAdmin: RequestHandler = async (req, res, next) => {
  try {
    if (req.query.q === "oeuvres") {
      const oeuvres = await oeuvreRepository.read(+req.params.id);
      res.status(200).json(oeuvres);
      return;
    }
    if (req.query.q === "users") {
      const users = await userRepository.read(+req.params.id);
      res.status(200).json(users);
      return;
    }
  } catch (error) {
    next(error);
  }
};

export default { browseAdmin, readAdmin };
