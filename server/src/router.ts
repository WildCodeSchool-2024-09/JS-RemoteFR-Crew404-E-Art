import express from "express";

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
import authActions from "./modules/auth/authActions";

/**login / register */

router.post("/api/register", authActions.register);
router.post("/api/login", authMiddleware.isRegistered, authActions.login);

/* ************************************************************************* */

export default router;
