import { ObjectId } from "mongodb";

export interface IGetProductsRequest{}

export interface IGetProductsResponse{
    data:{
        productsList: Array<{
            _id: ObjectId;
            name: string;
            price: number;
            available: number;
        }>
    }
}
