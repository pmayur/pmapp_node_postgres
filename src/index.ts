import express, { NextFunction, Request, Response } from "express";
import { MainRouter } from "./routers";
import { createConnection } from "typeorm";
import HTTPError from "./util/ErrorService";
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const router = MainRouter;
const port = process.env.HTTPSERVER_PORT || 8080; // default port to listen

app.use(bodyParser.json());

app.get("/", (_req, res) => {
    res.send("Hello world!");
});

app.use(router);

app.use((err: HTTPError, _req: Request, res: Response, next: NextFunction) => {
    let message = err.message;
    res.status(err.statusCode || 500).json({
        status: "error",
        message: message,
    });
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

createConnection({
    type: "postgres",
    host: process.env.DBHOST,
    port: 5432,
    username: process.env.DBUSER_NAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    entities: [__dirname + "/entities/*"],
    synchronize: true,
}).then(() => {
    console.log("postgres database connected");
});
