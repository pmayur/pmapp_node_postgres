import { Router } from "express";
import { StoryController } from "../../controllers";

class StoryRouter {
    private _router = Router();
    private _controller = StoryController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.post("/create", this._controller.createStory);
        this._router.get("/list", this._controller.listUserStories);
    }
}

export = new StoryRouter().router;
