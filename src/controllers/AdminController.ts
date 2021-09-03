import { NextFunction, Request, Response } from "express";
import { AdminService } from "../services";

class AdminController {
    updateStory(req: Request, res: Response, next: NextFunction) {
        try {
            const storyId = req.params.storyId;
            const response = AdminService.updateStory(req.body, storyId);
            res.send(response);
        } catch (error) {
            next(error);
        }
    }
    async listAllStories(req: Request, res: Response, next: NextFunction) {
        try {
            const stories = await AdminService.getAllStories();
            res.send(stories);
        } catch (error) {
            next(error);
        }
    }
}

export default new AdminController();
