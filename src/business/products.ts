import { ProductData as Data } from "./../data";
import Response from './../classes/response';
import { IPostProductResponse, IPostProductRequest } from './../classes/interfaces/api/postProduct';
import { IGetProductByIdResponse, IGetProductByIdRequest } from './../classes/interfaces/api/product/getProductById';
import { IGetProductsResponse } from './../classes/interfaces/api/product/getProducts';
import { RequisitionStatus } from "../classes/interfaces/httpstatus";
import { ObjectId } from "mongodb";

export class ProductBusiness{
    private _data: Data;
    
    constructor(){
        this._data = new Data();
    }

    public async getProducts(): Promise<Response<IGetProductsResponse>>{
        let result = await this._data.getProducts();

        let data: IGetProductsResponse = {
            data:{
                productsList: result
            }
        };
        let response = new Response<IGetProductsResponse>(RequisitionStatus.Ok, data);

        return response;
    }

    public async getProductById(request: IGetProductByIdRequest): Promise<Response<IGetProductByIdResponse>>{
        let objectId = new ObjectId(request._id);
        let result = await this._data.getProductById(objectId);
        let data: IGetProductByIdResponse = {
            product: result[0]
        };

        let response = new Response<IGetProductByIdResponse>(RequisitionStatus.Ok, data);

        return response;
    }

    public async postProduct(request:IPostProductRequest): Promise<Response<IPostProductResponse>>{
        let result = await this._data.postProduct(request);
        
        let data: IPostProductResponse = {
            data:{
                insertedCount: result.insertedCount,
                insertedId: result.insertedId
            }
        };
        let response = new Response<IPostProductResponse>(RequisitionStatus.Created, data);

        return response;
    }
}