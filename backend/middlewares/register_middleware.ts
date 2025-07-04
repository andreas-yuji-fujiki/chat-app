import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../prisma/generated/prisma';

const prisma = new PrismaClient();

const checkEmailExists = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
        res.status(400).json({
            message: 'Email already exists',
            error: 400
        });
        return;
    }
    next();
};

export default checkEmailExists;