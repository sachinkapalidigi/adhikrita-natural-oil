import { Request, Response } from "express";
import { createUser, findUserByUsername } from "../../models/users";
import {
  comparePassword,
  generateBearerToken,
  hashPassword,
} from "../../utils/authUtil";

async function httpLoginHandler(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  const valid = await comparePassword(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  const token = generateBearerToken(user.username, user._id.toString());
  res.status(200).json({ token });
}

async function httpRegisterHandler(req: Request, res: Response) {
  const { username, password, name } = req.body;

  const user = await findUserByUsername(username);
  if (user) {
    return res.status(409).json({ error: "Username already exists" });
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await createUser(username, hashedPassword, name);

  const token = generateBearerToken(newUser.username, newUser._id.toString());
  res.status(201).json({ token });
}

export { httpLoginHandler, httpRegisterHandler };
