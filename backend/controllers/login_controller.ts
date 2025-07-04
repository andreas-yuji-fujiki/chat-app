import { PrismaClient } from "../prisma/generated/prisma";
import { sign } from "../utils/jwt";
import { Response, Request } from "express";

const prisma = new PrismaClient();

const loginController = async (req: Request, res: Response) => {
    const user = (req as any).user;
    const token = sign({ id: user.id, email: user.email });
    res.status(200).json({ token, message: "Login successfully!" });
};

export default loginController;