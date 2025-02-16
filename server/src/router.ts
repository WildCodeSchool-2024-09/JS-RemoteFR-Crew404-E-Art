import express from "express";
import jwtMiddleware from "./middlewares/jwtMiddleware";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// Middleware
/* ************************************************************************* */
import authMiddleware from "./middlewares/authMiddleware";
import oeuvreMiddleware from "./middlewares/oeuvreMiddleware";

import adminActions from "./modules/admin/adminActions";
/* ************************************************************************* */
// Actions
/* ************************************************************************* */
import authActions from "./modules/auth/authActions";
import oeuvreActions from "./modules/oeuvre/oeuvreActions";
import userActions from "./modules/user/userActions";

/**
 * Login, Register, Logout
 */
router.post("/api/register", authMiddleware.hashPassword, authActions.register);
router.post(
  "/api/login",
  authMiddleware.isRegistered,
  authMiddleware.comparePassword,
  authActions.login,
);

router.get("/api/oeuvres", oeuvreActions.browse);
router.get("/api/oeuvres/:id", oeuvreActions.read);

// Ici, nous allons faire un "mur" pour les routes qui nécessitent une authentification
// A partir de ce point, toutes les routes nécessiteront un token JWT valide
router.use(jwtMiddleware.verifyToken);

router.post("/api/logout", authActions.logout);
/**
 * oeuvres
 */
router.post("/api/oeuvre", oeuvreMiddleware.uploads, oeuvreActions.add);

/**
 * Send request artist
 */

router.post("/api/request", userActions.sendRequest);
router.get("/api/request", userActions.browseRequest);
router.put("/api/request/:id", userActions.acceptRequest);
router.delete("/api/request/:id", adminActions.destroyAdmin);
/**
 * Admin
 */

router.get("/api/admin/", adminActions.browseAdmin);
router.get("/api/admin/:id", adminActions.readAdmin);
router.delete("/api/admin/:id", adminActions.destroyAdmin);

/* ************************************************************************* */

export default router;
