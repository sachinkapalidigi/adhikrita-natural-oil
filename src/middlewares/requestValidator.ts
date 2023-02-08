import { Request, Response, NextFunction } from "express";
import Joi from "joi";

type RequestValidatorType = "body" | "query" | "params" | "headers";

const requestValidator = (
  schema: Joi.ObjectSchema,
  rvt: RequestValidatorType = "body"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[rvt]);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    return next();
  };
};

export default requestValidator;
