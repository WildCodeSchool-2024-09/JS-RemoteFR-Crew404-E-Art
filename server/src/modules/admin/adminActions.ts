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
      // le signe + permet de rendre le type d'une string en number
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

const destroyAdmin: RequestHandler = async (req, res, next) => {
  try {
    if (req.query.q === "oeuvres") {
      const oeuvres = await oeuvreRepository.delete(+req.params.id);
      res.sendStatus(204).json({ message: "oeuvre deleted successfully" });
      return;
    }
    if (req.query.q === "users") {
      const users = await userRepository.delete(+req.params.id);
      res.sendStatus(204).json({ message: "Request deleted successfully" });
      return;
    }
  } catch (error) {
    next(error);
  }
};

export default { browseAdmin, readAdmin, destroyAdmin };
