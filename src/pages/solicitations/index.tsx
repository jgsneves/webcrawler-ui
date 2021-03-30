import React from 'react';
import {useObserver} from "mobx-react";
import {Main, TableHeader, TableItem} from './styles';
import { useRootStore } from '../../provider';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';

export const Solicitations = () => {
    const {requestStore} = useRootStore();
    return useObserver(() => (
        <Main>
            <h1>Solicitações</h1>
            <p>Confira as solicitações abertas.</p>
            <article>
                <TableHeader>
                    <li>id</li>
                    <li>Palavra-chave</li>
                    <li>Data de criação</li>
                    <li>Status</li>
                </TableHeader>
                {requestStore.requests.map(request =>
                    <Link 
                        to={`/solicitacoes/${request.id}`} 
                        style={{textDecoration: "none"}}
                        key={request.id}
                    >
                        <TableItem>
                            <p>{request.id}</p>
                            <p>{request.keyword}</p>
                            <p>{request.created}</p>
                            <p>{request.status}</p>
                        </TableItem>
                    </Link> 
                )}
            <Link to='/'>
                <Button>voltar</Button>
            </Link>
            </article>
        </Main>
    ));
};