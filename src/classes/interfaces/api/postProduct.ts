export interface IPostProductRequest{
    name: string;
    available: number;
    price: number
}

export interface IPostProductResponse{
    data:{
        insertedId: string;
        insertedCount: number;
    }
}