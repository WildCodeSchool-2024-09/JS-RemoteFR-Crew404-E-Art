import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import authActions from "./modules/auth/authActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/**login / register */
/**router.post("/api/login",);*/
router.post("/api/register", authActions.register);
router.post("/api/login", authActions.login);

/* ************************************************************************* */

export default router;
