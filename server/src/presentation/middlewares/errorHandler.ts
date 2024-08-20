import { NextFunction, Request, Response } from "express";
import { isHttpError } from "http-errors";

export default (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  let statusCode = 500;
  let errorMessage = "An Unknown Error occurred";
  if (isHttpError(error)) {
    statusCode = error.statusCode;
    errorMessage = error.message;
  }
  res.status(statusCode).json({
    error: {
      message: errorMessage,
    },
  });
};
