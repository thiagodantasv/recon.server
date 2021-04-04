import { ProductData as Data } from "./../data";
import Response from './../classes/response';
import { IPostProductResponse, IPostProductRequest } from './../classes/interfaces/api/postProduct';
import { IGetProductsResponse } from './../classes/interfaces/api/product/getProducts';
import { RequisitionStatus } from "../classes/interfaces/httpstatus";

export class ProductBusiness{
    private _data: Data;
    
    constructor(){
        this._data = new Data();
    }

    public async getProducts(): Promise<Response<IGetProductsResponse>>{
        let result = await this._data.getProducts();

        let data: IGetProductsResponse = {
            productsList: result
        };
        console.log('data', data);
        let response = new Response<IGetProductsResponse>(RequisitionStatus.Ok, data);

        return response;
    }

    // public async getProduct(request){
    //     return await this._data.getProduct();
    // }

    public async postProduct(request:IPostProductRequest): Promise<Response<IPostProductResponse>>{
        let result = await this._data.postProduct(request);
        
        let data: IPostProductResponse = {
            insertedCount: result.insertedCount,
            insertedId: result.insertedId
        };

        let response = new Response<IPostProductResponse>(RequisitionStatus.Created, data);

        return response;
    }
}