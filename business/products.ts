import { ProductData as Data } from "./../data";

export class ProductBusiness{
    private _data: Data;
    
    constructor(){
        this._data = new Data();
    }

    public async getProducts(){
        return await this._data.getProducts();
    }
}