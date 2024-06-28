import EventEmitter from "events";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

class CustomMessage {
  response: Response;
  events: EventEmitter;

  constructor(res: Response) {
    this.response = res;
    this.events = new EventEmitter();
  }

  success(statusCode: number, message: any) {
    const { response, events } = this;
    events.once("success", () =>
      response.status(statusCode).json({ ...message })
    );
    return events.emit("success");
  }

  created(statusCode: number, message: any) {
    const { response, events } = this;
    events.once("created", () =>
      response.status(statusCode).json({ ...message })
    );
    return events.emit("created");
  }

  error(statusCode: number, message: any) {
    const { response, events } = this;
    events.once("error", () =>
      response.status(statusCode).json({ ...message })
    );
    return events.emit("error");
  }
}

export const okResponse = (req: Request, res: Response, okMessage: any) => {
  return new CustomMessage(res).error(StatusCodes.OK, {
    response: {
      status: ReasonPhrases.OK,
      code: StatusCodes.OK,
      method: req.method,
      message: okMessage,
    },
  });
};

export const unauthorizedResponse = (
  req: Request,
  res: Response,
  errMessage: any
) => {
  return new CustomMessage(res).error(StatusCodes.UNAUTHORIZED, {
    response: {
      status: ReasonPhrases.UNAUTHORIZED,
      code: StatusCodes.UNAUTHORIZED,
      method: req.method,
      message: errMessage,
    },
  });
};

export const badRequestResponse = (
  req: Request,
  res: Response,
  errMessage: any
) => {
  return new CustomMessage(res).error(StatusCodes.BAD_REQUEST, {
    response: {
      status: ReasonPhrases.BAD_REQUEST,
      code: StatusCodes.BAD_REQUEST,
      method: req.method,
      message: errMessage,
    },
  });
};

// module.exports = {
//   okResponse,
//   unauthorizedResponse,
//   badRequestResponse,
// };
