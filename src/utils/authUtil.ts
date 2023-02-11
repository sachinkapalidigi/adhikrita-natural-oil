import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

function generateToken(username: string, userId: string): string {
  const secret = process.env.JWT_TOKEN_SECRET || "Notsomuchofasecrett";
  return jwt.sign({ username, userId }, secret, { expiresIn: "180 days" });
}

export function generateBearerToken(username: string, userId: string) {
  if (!username || !userId) throw new Error("Username and userId are required");
  const token = generateToken(username, userId);
  return `Bearer ${token}`;
}

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

export async function comparePassword(password: string, passwordHash: string) {
  return await bcrypt.compare(password, passwordHash);
}
