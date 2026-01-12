import { Response } from "express";
import { ErrorResponse } from "../types/Error";

export const handleError = (res: Response, error: unknown) => {
  console.error(error);

  let statusCode = 500;
  let message = "Internal Server Error occurred";

  if (error instanceof Error) {
    message = error.message || message;
    const maybeStatus = (error as any).statusCode;
    if (typeof maybeStatus === "number") {
      statusCode = maybeStatus;
    }
  }

  const payload: ErrorResponse = {
    success: false,
    message,
    statusCode,
  };

  return res.status(statusCode).json(payload);
};
