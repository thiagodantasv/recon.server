import { IPostProductRequest } from './../classes/interfaces/api/postProduct';
import { Mongo } from './../classes/mongo';
import { ObjectID } from 'mongodb';

export class ProductData{
    constructor(){}

    public async getProducts(){
        let result = await Mongo.productsCollection.find({}).toArray();
        return result;
    }

    public async getProductById(_id: ObjectID){
        let result = await Mongo.productsCollection.find({_id: _id});
        return result;
    }

    public async getProductByName(name: string){
        let result = await Mongo.productsCollection.find({name: name});
        return result;
    }

    public async postProduct(request:IPostProductRequest):Promise<any>{
        let result = await Mongo.productsCollection.insertOne(request);
        return result;
    }
}