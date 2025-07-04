import { Router } from "express";
import registerController from "../../controllers/register_controller";
import checkEmailExists from "../../middlewares/register_middleware";

const registerRouter = Router();

registerRouter.post("/", checkEmailExists, registerController);

export default registerRouter;