import { BaseData } from './../classes';
import { Mongo } from './../classes/mongo';

export class ProductData{
    constructor(){
        
    }

    public async getProducts(){
        let test = await Mongo.db.collection('products').find({}).toArray();
        console.log('test', test);
        return test;
    }
}