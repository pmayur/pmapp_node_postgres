import express from 'express';
import { MainRouter } from './routers';
import { createConnection } from 'typeorm';
require('dotenv').config()

const app = express();
const router = MainRouter;
const port = process.env.HTTPSERVER_PORT || 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use(router);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

createConnection({
    type: 'postgres',
    host: process.env.DBHOST,
    port: 5432,
    username: process.env.DBUSER_NAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    entities: [__dirname + '/entities/*'],
    synchronize: true
}).then(() => {
    console.log('postgres database connected')
})