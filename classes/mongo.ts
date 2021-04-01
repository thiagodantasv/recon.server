import { MongoClient, Db, Collection } from 'mongodb';
import IProducts from './interfaces/collections/productsCollection'

export class Mongo{
    private databaseName:string;
    static db: Db;
    static client: MongoClient;
    static productsCollection: Collection<IProducts>;
    constructor(connectionString: string, database:string ){
        Mongo.client = new MongoClient(connectionString, {useNewUrlParser: true, useUnifiedTopology:true});
        this.databaseName = database;
    }
    
    public async initialize(){
         await Mongo.client.connect();
         Mongo.db = await Mongo.client.db(this.databaseName);
         Mongo.productsCollection = Mongo.db.collection<IProducts>('products');
    }
    private async createCollection(name: string){
        try{
            // this.client.createCollection(name);
        }catch(error){
            console.log(`could not create the collection ${name}. ERROR ->  ${error}`);
        }
    }

}