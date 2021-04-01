import {observable, action} from 'mobx';

export interface IRequest {
    id: string;
    keyword: string;
    created: string;
    status: string;
    urls: string[];
}

export class RequestStore {
    storageRequests = localStorage.getItem("@webcrawler: requests");
    @observable requests: IRequest[] = this.storageRequests ? JSON.parse(this.storageRequests) : [];

    @action
    addRequest = (request: IRequest) => {
        this.requests.push(request);
    }
}