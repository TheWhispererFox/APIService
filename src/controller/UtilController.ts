import { Request, Response, NextFunction } from "express";

export class UtilController {
  sendOptions(request: Request, response: Response, next: NextFunction) {
    response.sendStatus(204);
  }
}
