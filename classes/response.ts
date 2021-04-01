
export default class Response<T>{
    private data: T;
    private error?: string;
    public status: number;

    constructor(status,data?,error?){
        
    }
}