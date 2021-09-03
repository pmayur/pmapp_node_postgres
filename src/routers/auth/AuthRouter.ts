import { Router } from "express";
import { AuthController } from "../../controllers";

class AuthRouter {
    private _router = Router();
    private _controller = AuthController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.post("/login", this._controller.login);
        this._router.post("/logout", this._controller.logout);
        this._router.post("/signup", this._controller.signup);
    }
}

export = new AuthRouter().router;
