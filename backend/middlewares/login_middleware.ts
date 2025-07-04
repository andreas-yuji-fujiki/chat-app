import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../prisma/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const loginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        res.status(401).json({ error: "User not found" });
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        res.status(401).json({ error: "Incorret password" });
        return;
    }

    (req as any).user = user;
    next();
};

export default loginMiddleware;