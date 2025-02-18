import { ro } from "@faker-js/faker/.";
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
      await oeuvreRepository.delete(+req.params.id);
      res.sendStatus(204);
      return;
    }
    if (req.query.q === "users") {
      await userRepository.delete(+req.params.id);
      res.sendStatus(204);
      return;
    }
  } catch (error) {
    next(error);
  }
};

const editUserAdmin: RequestHandler = async (req, res, next) => {
  try {
    const user = {
      id: Number(req.params.id),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role_id: req.body.role_id,
    };
    const affectedRows = await userRepository.update(user, user.role_id);
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

export default { browseAdmin, readAdmin, destroyAdmin, editUserAdmin };
