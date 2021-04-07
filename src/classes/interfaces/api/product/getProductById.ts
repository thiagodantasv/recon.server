import { ObjectId } from "mongodb";

export interface IGetProductByIdRequest{
    _id: string;
}

export interface IGetProductByIdResponse{
    product:{
        _id: ObjectId,
        name: string,
        price: number,
        available: number
    }
}
