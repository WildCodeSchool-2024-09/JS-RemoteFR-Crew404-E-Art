import express from "express";
import type { Request, Response } from "express";
import jwtMiddleware from "./middlewares/jwtMiddleware";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import authMiddleware from "./middlewares/authMiddleware";
import oeuvreMiddleware from "./middlewares/oeuvreMiddleware";
import authActions from "./modules/auth/authActions";
import oeuvreActions from "./modules/oeuvre/oeuvreActions";

/**login / register */

router.post("/api/register", authMiddleware.hashPwd, authActions.register);
router.post("/api/login", authMiddleware.isRegistered, authActions.login);
router.post(
  "/api/oeuvre",
  oeuvreMiddleware.uploads.single("upload"),
  oeuvreActions.add,
);

/* ************************************************************************* */

export default router;
