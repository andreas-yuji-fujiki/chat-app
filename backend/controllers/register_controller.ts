import { PrismaClient } from "../prisma/generated/prisma";
import { Response, Request } from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const registerController = async (req: Request, res: Response) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        }
    });
    res.status(201).json(user); 
}

export default registerController;