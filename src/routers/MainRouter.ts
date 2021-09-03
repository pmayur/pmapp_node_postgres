import { Router } from "express";
import AuthRouter from "./auth/AuthRouter";
import StoryRouter from "./story/StoryRouter";

class MainRouter {
    private _router = Router();
    private _authRouter = AuthRouter;
    private _storyRouter = StoryRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.use("/auth", this._authRouter);
        this._router.use("/story", this._storyRouter);
    }
}

export = new MainRouter().router;
