import { Router } from "express";
import { AdminController } from "../../controllers";

class StoryRouter {
    private _router = Router();
    private _controller = AdminController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.put("/story/:storyId", this._controller.updateStory);
        this._router.get("/listall", this._controller.listAllStories);
    }
}

export = new StoryRouter().router;
