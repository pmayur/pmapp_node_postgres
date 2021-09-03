import { NextFunction, Request, Response } from "express";
import { HTTPUnauthorizedError } from "../util/ErrorService";
import * as jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../util/dto";

class MiddlewareService {
    verifyUser(req: Request, res: Response, next: NextFunction) {
        const token = MiddlewareService.getToken(req);
        const jwtsecret = MiddlewareService.getJwtSecret();
        const user = MiddlewareService.getUserFromToken(token, jwtsecret);
        (<AuthenticatedRequest>req).currentUser = user;
        next();
    }
    verifyAdmin(req: Request, res: Response, next: NextFunction) {
        const token = MiddlewareService.getToken(req);
        const jwtsecret = MiddlewareService.getJwtSecret();
        const user = MiddlewareService.getUserFromToken(token, jwtsecret);
        if (user.isAdmin.toString() === "true") {
            (<AuthenticatedRequest>req).currentUser = user;
            next();
        } else {
            throw new HTTPUnauthorizedError("User is not an admin");
        }
    }
    static getJwtSecret() {
        const jwtsecret = process.env.JWTSECRET;
        if (!jwtsecret) {
            throw new Error("JWTSSECRET not present in .env file");
        }
        return jwtsecret;
    }
    static getToken(req: Request) {
        const authHeader = req.headers.authorization;
        if (authHeader) return authHeader.split(" ")[1];
        else throw new HTTPUnauthorizedError("Please provide auth token");
    }
    static getUserFromToken(token: string, jwtsecret: string) {
        try {
            return <any>jwt.verify(token, jwtsecret);
        } catch (error) {
            throw new HTTPUnauthorizedError("Token Invalid");
        }
    }
}

export = new MiddlewareService();
