import { Db, MongoClient } from "mongodb";
import * as databaseData from '../../dbconfig.json';

export class BaseData{
    // protected client: MongoClient;
    protected client: MongoClient;
    constructor(){
        this.client = new MongoClient(databaseData.url, {useNewUrlParser: true, useUnifiedTopology:true});
    }

    protected async connect(): Promise<MongoClient>{
        return await this.client.connect();
    }
}