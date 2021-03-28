import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import { useRootStore } from '../../provider';
import {IRequest} from '../../provider/RequestStore';
import {Main} from './styles';

type IProps = RouteComponentProps<{id: string}>;

export const RequestDetailed = (props: IProps) => {
    const {id} = props.match.params;

    const {requestStore} = useRootStore();
    const fromStore = requestStore.requests.filter(request => request.id === id)[0];
    
    const [selectedRequest, setSelectedRequest] = React.useState<IRequest>();

    
    React.useEffect(() => {
        async function getData() {
            return await fetch(`http://testapp.axreng.com:3000/crawl/${id}`).then(res => res.json());
        }
        getData().then((data: IRequest) => {
            const fullData = {
                "id": id,
                "keyword": fromStore.keyword,
                "created": fromStore.created,
                "status": data.status,
                "urls": data.urls
            }
            setSelectedRequest(fullData);
        });
    }, [id, fromStore.created, fromStore.keyword]);

    return (
        <Main>
            <h1>Detalhes da solicitação</h1>
            <section>
                <div>
                    <h3>Id:</h3>
                    <p>{selectedRequest?.id}</p>
                </div>
                <div>
                    <h3>Palavra-chave:</h3>
                    <p>{selectedRequest?.keyword}</p>
                </div>
                <div>
                    <h3>Criado em:</h3>
                    <p>{selectedRequest?.created}</p>
                </div>
                <div>
                    <h3>Status:</h3>
                    <p>{selectedRequest?.status}</p>
                </div>
                <div>
                    <h3>Resultado:</h3>
                    <ul>
                        {selectedRequest?.urls.map(url =>
                            <a href={url} target="blank" key={url}>
                                <li>{url}</li>
                            </a> 
                        )}
                    </ul>
                </div>
            </section>
        </Main>
    )
}