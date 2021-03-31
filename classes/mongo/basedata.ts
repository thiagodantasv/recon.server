import { Db, MongoClient } from "mongodb";

export class BaseData{    
    static client: MongoClient;
    static db: Db;

    constructor(connectionString: string){
        BaseData.client = new MongoClient(connectionString, {useNewUrlParser: true, useUnifiedTopology:true});
    }
}