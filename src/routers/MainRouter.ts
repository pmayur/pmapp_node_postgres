import { Router } from "express";
import AdminRouter from "./admin/AdminRouter";
import AuthRouter from "./auth/AuthRouter";
import DocsRouter from "./docs/DocsRouter";
import StoryRouter from "./story/StoryRouter";

class MainRouter {
    private _router = Router();
    private _authRouter = AuthRouter;
    private _storyRouter = StoryRouter;
    private _adminRouter = AdminRouter;
    private _docsRouter = DocsRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.use("/docs", this._docsRouter);
        this._router.use("/auth", this._authRouter);
        this._router.use("/story", this._storyRouter);
        this._router.use("/admin", this._adminRouter);
    }
}

export = new MainRouter().router;
