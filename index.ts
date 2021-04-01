import * as express from "express";
import * as dotenv from "dotenv";
import { Router } from "./routes/router";
import * as projectInformation from "./package.json";
import { Mongo } from "./classes/mongo"


const projectVersion = projectInformation.version;
const projectAuthor = projectInformation.author;

console.log(
    "*************" + 
    "\n*\n" + 
    `Project Version: ${projectVersion}` + 
    "\n" + 
    `Project Author: ${projectAuthor}` + 
    "\n*\n*" + 
    "*************"
);

let startServer = async() => {
    //initialize enviroment variables
    dotenv.config();

    const port = parseInt(process.env.SERVER_PORT);
    const database = process.env.MONGODB_DATABASE;
    const connectionString = process.env.MONGODB_URL;
    if(!port){
        throw "No port configured for the server. You can solve this by inserting one enviroment variable called SERVER_PORT(And it MUST be a number)";
    }
    if(!connectionString){
        throw "No connection string was found at your .env file. you can solve this by setting a connection string at the variable MONGODB_URL";
    }
    if(!database){
        throw "No database configured. You must include a valid database at your .env file in the variable MONGODB_DATABASE";
    }

    const mongo = new Mongo(connectionString, database);
    mongo.initialize();
    
    const app = express();
    app.use(express.json());
    const router = new Router(app);
    await router.initializeRoutes().then((controllers) => {
        controllers.map((controller) => {
            console.log(`${controller} Controller have been initialized`);
        })
    });

    app.listen(port, () => {
        console.log(`Server listening in: ${port}`);
    });    
}
startServer();
