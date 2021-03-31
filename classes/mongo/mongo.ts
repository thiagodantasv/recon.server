import { BaseData } from "./basedata";

export class Mongo extends BaseData{
    private databaseName:string;
    constructor(connectionString: string, database:string ){
        super(connectionString);
        this.databaseName = database;
    }
    
    public async initialize(){
         await Mongo.client.connect();
         Mongo.db = await Mongo.client.db(this.databaseName);
    }
    private async createCollection(name: string){
        try{
            // this.client.createCollection(name);
        }catch(error){
            console.log(`could not create the collection ${name}. ERROR ->  ${error}`);
        }
    }

}