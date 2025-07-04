import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET_KEY || "secret_key";

export function sign(payload: object) {
    return jwt.sign(payload, SECRET, { expiresIn: "5d" });
}

export function verify(token: string) {
    return jwt.verify(token, SECRET);
}

