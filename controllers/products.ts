import { ProductBusiness as Business } from "./../business";

export class ProductController{
    private _business: Business;
    constructor(){
        this._business = new Business();
    }

    public async getProducts(){
        return await this._business.getProducts();
    }
}