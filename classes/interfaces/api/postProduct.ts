export interface IPostProductRequest{
    name: string;
    available: number;
    price: number
}

export interface IPostProductResponse{
    insertedId: string;
    insertedCount: number;
}