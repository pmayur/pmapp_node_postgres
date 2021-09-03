import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services";
import { HTTPBadRequestError } from "../util/ErrorService";

class AuthController {
    async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const { firstName, lastName, email, password } = req.body;
            if (!firstName || !lastName || !email || !password) {
                throw new HTTPBadRequestError(
                    "Please provide inputs to all fields"
                );
            }
            const tokenResponse = await AuthService.signup(
                firstName,
                lastName,
                email,
                password
            );
            res.send(tokenResponse);
        } catch (error) {
            next(error);
        }
    }
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw new HTTPBadRequestError(
                    "Please provide inputs to all fields"
                );
            }
            const tokenResponse = await AuthService.signin(email, password);
            res.send(tokenResponse);
        } catch (error) {
            next(error);
        }
    }
    logout() {
        throw new Error("Method not implemented.");
    }
}

export default new AuthController();
