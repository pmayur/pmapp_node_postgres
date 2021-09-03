import express from 'express';
import { MainRouter } from './routers';

const app = express();
const router = MainRouter;
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use(router);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
