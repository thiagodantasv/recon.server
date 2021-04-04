import { ProductBusiness as Business } from "./../business";
import Response from './../classes/response';
import { IPostProductResponse, IPostProductRequest } from './../classes/interfaces/api/postProduct';
import { IGetProductsResponse, IGetProductsRequest } from './../classes/interfaces/api/product/getProducts';
import IError from './../classes/interfaces/api/error';
import { RequisitionStatus } from './../classes/interfaces/httpstatus';

export class ProductController{
    private _business: Business;
    constructor(){
        this._business = new Business();
    }

    public async getProducts():Promise<Response<IGetProductsResponse> | Response<IError>>{
        try{
            return await this._business.getProducts();
        }catch(err){
            let error:IError = {
                error: err
            }
            return new Response<IError>(RequisitionStatus.ServerError, error);
        }
    }

    public async postProduct(request:IPostProductRequest):Promise<Response<IPostProductResponse> | Response<IError>>{
        try{
            return await this._business.postProduct(request);
        }catch(err){
            let error: IError = {
                error:err
            }
            return new Response<IError>(RequisitionStatus.ServerError, error);
        }
    }
}