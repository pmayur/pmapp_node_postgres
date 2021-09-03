import { NextFunction, Request, Response } from "express";
import { StoryService } from "../services";
import { AuthenticatedRequest } from "../util/dto";
import { COMPLEXITY, STATUS, TYPE } from "../util/Enums";
import { HTTPBadRequestError } from "../util/ErrorService";
import ValidatorService from "../util/ValidatorService";

class StoryController {
    listUserStories(arg0: string, listUserStories: any) {
        throw new Error("Method not implemented.");
    }

    async createStory(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                summary,
                description,
                type,
                complexity,
                status,
                workingHrsRequired,
            } = req.body;

            if (
                !req.body.hasOwnProperty('summary') ||
                !req.body.hasOwnProperty('description')
            ) {
                throw new HTTPBadRequestError(
                    "Please provide inputs to all fields"
                );
            }

            // Validation of ENUM fields
            const typeValidated: TYPE = ValidatorService.validateType(type);
            // Validation of optional fields
            const complexityValidated: COMPLEXITY =
                ValidatorService.validateComplexity(complexity || "low");
            const statusValidated: STATUS = ValidatorService.validateStatus(
                status || "new"
            );

            const response = await StoryService.createStory({
                summary,
                description,
                type: typeValidated,
                complexity: complexityValidated,
                status: statusValidated,
                workingHrsRequired: workingHrsRequired && parseInt(workingHrsRequired),
                userId: (<AuthenticatedRequest>req).currentUser.userId
            });

            res.send(response);
        } catch (error) {
            next(error);
        }
    }
}

export default new StoryController();
