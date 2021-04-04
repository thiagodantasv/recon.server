import { ObjectID } from "mongodb";

export interface IGetProductsRequest{}

export interface IGetProductsResponse{
    productsList: Array<{
        _id: ObjectID;
        name: string;
        price: number;
        available: number;
    }>
}
