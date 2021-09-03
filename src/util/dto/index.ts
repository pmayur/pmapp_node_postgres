import { Request } from "express";
import { COMPLEXITY, STATUS, TYPE } from "../Enums";

export interface CreateStoryDTO {
    summary: string;
    description: string;
    type: TYPE;
    complexity: COMPLEXITY;
    status: STATUS;
    workingHrsRequired?: number;
    userId: string;
}

export interface AuthenticatedRequest extends Request {
    currentUser: any;
}
