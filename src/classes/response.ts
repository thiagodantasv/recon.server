import { RequisitionStatus } from './interfaces/httpstatus';

export default class Response<T>{
    public content:T;
    public status: RequisitionStatus;

    constructor(status: RequisitionStatus,data?: T){
        this.status = status;
        this.content = data;
    }

    formatData(formatter: Function){
        return formatter;
    }
}