import { Router } from "express";
import { SettingsControler } from "./controllers/SettingsController";
import { UserController } from "./controllers/UserController";

const routes = Router();
const settingsController = new SettingsControler();
const userController = new UserController();

routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);

export { routes };