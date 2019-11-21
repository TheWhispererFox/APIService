import { UserController } from "./controller/UserController";
import { PlayerController } from "./controller/PlayerController";
import { UtilController } from "./controller/UtilController";
import { MediaController } from "./controller/MediaController";

export const Routes = [
  {
    //     method: "get",
    //     route: "/users",
    //     controller: UserController,
    //     action: "all"
    // }, {
    //     method: "get",
    //     route: "/users/:id",
    //     controller: UserController,
    //     action: "one"
    // }, {
    //     method: "post",
    //     route: "/users",
    //     controller: UserController,
    //     action: "save"
    // }, {
    //     method: "delete",
    //     route: "/users/:id",
    //     controller: UserController,
    //     action: "remove"
    method: "get",
    route: "/players",
    controller: PlayerController,
    action: "all"
  },
  {
    method: "post",
    route: "/players/auth",
    controller: PlayerController,
    action: "auth"
  },
  {
    method: "post",
    route: "/players",
    controller: PlayerController,
    action: "save"
  },
  {
    method: "options",
    route: "/players",
    controller: UtilController,
    action: "sendOptions"
  },
  {
    method: "get",
    route: "/players/avatar*",
    controller: MediaController,
    action: "getAvatar"
  },
  {
    method: "get",
    route: "/videos*",
    controller: MediaController,
    action: "getVideo"
  },
  {
    method: "post",
    route: "/players/upload/avatar*",
    controller: MediaController,
    action: "uploadAvatar"
  }
];
