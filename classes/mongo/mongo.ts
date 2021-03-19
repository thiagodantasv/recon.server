import { BaseData } from "./basedata";
import * as databaseData from "./../../dbconfig.json";

export class Mongo extends BaseData{
    constructor(){
        super();
        this.initialize();
    }
    
    private async initialize(){
        await this.connect();
    }


    private async createCollection(name: string){
        try{
            // this.client.createCollection(name);
        }catch(error){
            console.log(`could not create the collection ${name}. ERROR ->  ${error}`);
        }
    }

}