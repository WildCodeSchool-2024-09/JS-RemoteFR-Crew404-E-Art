import type { RequestHandler } from "express";
import oeuvreRepository from "./oeuvreRepository";

// The B of BREAD - Browse (Read All) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    const artwork = JSON.parse(req.body.artwork);
    const image = req.body.image;
    const addArtwork = { ...artwork, image };

    const oeuvre = await oeuvreRepository.create(addArtwork);

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

export default { add };
