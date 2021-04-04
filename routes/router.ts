import {
    ProductController,
    PortalController
} from "./../controllers";

export class Router{
    private app;
    private _productController: ProductController;
    private _portalController: PortalController;
    private initializedControllers:string[];
    constructor(app){
        this.app = app;
        this._productController = new ProductController();
        this._portalController = new PortalController();
        this.initializedControllers = [];
    }

    public initializeRoutes = async(): Promise<string[]> => {
        return new Promise(async (resolve, reject) => {
            try{
                await this.initializeProductController();
                await this.initializePortalController();
                resolve(this.initializedControllers);
            }catch(error){
                reject(error);
            }
        })
    }

    private initializeProductController(){
        try{
            this.app.get("/getProducts", async (request, response) => {
                let result = await this._productController.getProducts();
                response.status(result.status).send(result.content);
            });

            this.app.post("/postProduct", async (request, response, next) => {
                let result = await this._productController.postProduct(request.body);
                response.status(result.status).send(result.content);
            });

            this.initializedControllers.push("Product");
        }catch(error){
            console.log("Error when initializing Product controller ->", error);
        }
    }

    private initializePortalController(){
        try{
            this.initializedControllers.push("Portal");
        }catch(error){
            console.log("Error when initializing Portal controller ->", error);
        }
    }
}