import { ObjectId } from 'mongodb';
export default interface IProducts{
    _id: ObjectId;
    name: string;
    price: number;
    available: number;
}