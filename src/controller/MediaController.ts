import { Request, Response, NextFunction } from "express";
import { existsSync, createWriteStream } from "fs";
import { IncomingForm } from "formidable";

export class MediaController {
  async getAvatar(req: Request, res: Response, _next: NextFunction) {
    existsSync(
      __dirname.replace(
        "controller",
        `media/images/avatars/${req.query.uuid}.png`
      )
    )
      ? res.sendFile(
          __dirname.replace(
            "controller",
            `media/images/avatars/${req.query.uuid}.png`
          ),
          error => (!!error ? console.log(error) : false)
        )
      : res.sendFile(
          __dirname.replace("controller", "media/images/avatars/default.png"),
          error => (!!error ? console.log(error) : false)
        );
  }

  async uploadAvatar(req: Request, res: Response, _next: NextFunction) {
    const form = new IncomingForm();
    form.uploadDir = __dirname.replace(
      "controller",
      `media/images/avatars/${req.query.uuid}.png`
    );
    res.send({
      reason: "Succesfull upload"
    });
  }

  async getVideo(req: Request, res: Response, _next: NextFunction) {
    existsSync(
      __dirname.replace("controller", `media/videos/${req.query.filename}.mp4`)
    )
      ? res.sendFile(
          __dirname.replace(
            "controller",
            `media/videos/${req.query.filename}.mp4`
          ),
          error => (!!error ? console.log(error) : false)
        )
      : res.sendFile(
          __dirname.replace("controller", "media/videos/timelapse.mp4"),
          error => (!!error ? console.log(error) : false)
        );
  }
}
