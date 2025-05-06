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
    const affectedRows = await userRepository.update(Number(req.params.id), 2);
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

const editOeuvreAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { title, year } = req.body;
    const affectedRows = await oeuvreRepository.update(
      +req.params.id,
      title,
      year,
    );
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

export default {
  browseAdmin,
  readAdmin,
  destroyAdmin,
  editUserAdmin,
  editOeuvreAdmin,
};
