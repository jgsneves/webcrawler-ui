import {observable, action} from 'mobx';

interface IRequest {
    id: string;
    keyword: string;
    created: string;
    status: string;
}

export class RequestStore {
    @observable requests: IRequest[] = [];

    @action
    addRequest = (request: IRequest) => {
        this.requests.push(request);
    }
}