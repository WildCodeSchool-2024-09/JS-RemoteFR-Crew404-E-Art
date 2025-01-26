import type { RequestHandler } from "express";

// Import access to data
import oeuvreRepository from "./oeuvreRepository";

// The B of BREAD - Browse (Read All) operation
const oeuvre: RequestHandler = async (req, res, next) => {
  try {
    const oeuvre = await oeuvreRepository.create(req.body);

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

export default { oeuvre };
