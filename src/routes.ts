import { Router } from "express";
import { SettingsControler } from "./controllers/SettingsController";
import { UserController } from "./controllers/UserController";
import { MessagesController } from "./controllers/MessageController";

const routes = Router();
const settingsController = new SettingsControler();
const userController = new UserController();
const messageController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);
routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.getUserMessages);

export { routes };