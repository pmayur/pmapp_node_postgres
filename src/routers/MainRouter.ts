import express, { Router } from "express";
import { AuthRouter } from ".";

class MainRouter {
    private _router = Router();
    private _authRouter = AuthRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.use("/auth", this._authRouter);
    }
}

export = new MainRouter().router;
