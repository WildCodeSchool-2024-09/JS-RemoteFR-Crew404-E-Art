import type { RequestHandler } from "express";
import oeuvreRepository from "./oeuvreRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const oeuvres = await oeuvreRepository.readAll();
    // Respond with the items in JSON format
    res.status(200).json(oeuvres);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The R of BREAD - Browse (Read) operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const oeuvre = await oeuvreRepository.read(+req.params.id);
    // Respond with the items in JSON format
    res.status(200).json(oeuvre);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Browse (Add) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).json({
        message: "Vous devez être connecté pour ajouter une oeuvre",
      });
      return;
    }
    const artwork = JSON.parse(req.body.artwork);
    const image = req.body.image;
    const addArtwork = { ...artwork, image };

    const oeuvre = await oeuvreRepository.create(addArtwork, req.user.id);

    if (!oeuvre) {
      res.status(401).json({ message: "Ceci n'est pas un oeuvre " });
      return;
    }

    // Respond with the items in JSON format
    res.status(201).json(oeuvre);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
