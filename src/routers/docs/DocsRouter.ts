import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

class DocsRouter {
    private _router = Router();

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        const options = {
            swaggerDefinition: {
                openapi: "3.0.0",
                servers: [
                    {
                        url: "/",
                        description: "Try it out Now",
                    },
                ],
                info: {
                    title: "Documentation for APIs",
                    version: "1.0.0", // Version of the app
                    description: `API modelling for different use case.`,
                },
                components: {
                    securitySchemes: {
                        bearerAuth: {
                            type: "http",
                            scheme: "bearer",
                            bearerFormat: "JWT",
                        },
                    },
                },
            },
            apis: ["./public/swagger/**/*.yaml"],
        };
        const swaggerSpec = swaggerJsdoc(options);
        this._router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
}

export = new DocsRouter().router;
