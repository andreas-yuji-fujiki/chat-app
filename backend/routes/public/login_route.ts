import { Router } from "express";
import loginController from "../../controllers/login_controller";
import checkUserExists from "../../middlewares/login_middleware";

const loginRouter = Router();

loginRouter.post("/", checkUserExists, loginController);

export default loginRouter;