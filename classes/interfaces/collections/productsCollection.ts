import { ObjectID } from 'mongodb';
export default interface IProducts{
    _id: ObjectID;
    name: string;
    price: number;
    available: number;
}