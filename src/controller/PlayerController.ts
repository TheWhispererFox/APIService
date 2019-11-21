import { Request, Response, NextFunction } from "express";
import { Player } from "../entity/core/Player";
import { hash, compare } from "bcrypt";

export class PlayerController {
  async all(_req: Request, res: Response, _next: NextFunction) {
    Player.find()
      .then(response => res.send(response))
      .catch(reason => res.send(reason));
  }

  async auth(req: Request, res: Response, _next: NextFunction) {
    await Player.findOne(
      !!req.body.login
        ? { where: { login: req.body.login } }
        : { where: { email: req.body.email } }
    )
      .then(async player => {
        if (player !== undefined) {
          await compare(req.body.password, player.password)
            .then(response => {
              if (response) {
                res.send(player);
              } else {
                res.send({
                  reason: "WrongPassword"
                });
              }
            })
            .catch(Reason => res.send(Reason));
        } else {
          res.send({
            reason: "NoPlayer"
          });
        }
      })
      .catch(Reason => res.send(Reason));
  }

  async save(req: Request, res: Response, _next: NextFunction) {
    // Если в запросе отсутствуют данные регистрации, то регистрация невозможно, отправляем код 400
    if (
      req.body.login !== undefined ||
      req.body.password !== undefined ||
      req.body.email !== undefined
    ) {
      // Хешируем пароль

      await hash(req.body.password, 10)
        .then(async (hash: string) => {
          // Пароль хеширован, продолжаем регистрацию
          let player = new Player();
          player.password = hash;
          player.login = req.body.login;
          player.email = req.body.email;
          // Регистрируем игрока в БД
          await player
            .save()
            .then(Player => {
              res.send(Player);
            })
            .catch(Reason => {
              res.send(Reason);
            });
        })
        .catch(Reason => {
          res.send(Reason);
        });
    } else {
      return {
        status: 400,
        reason: "register request must have login, password, email"
      };
    }
  }
}
