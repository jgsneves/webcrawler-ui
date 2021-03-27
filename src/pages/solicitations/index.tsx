import React from 'react';
import {useObserver} from "mobx-react";
import {Main, TableHeader, TableItem} from './styles';
import { useRootStore } from '../../provider';

export const Solicitations = () => {
    const {requestStore} = useRootStore();
    return useObserver(() => (
        <Main>
            <h1>Solicitações</h1>
            <p>Confira as solicitações abertas ou busque por palavra-chave</p>
            <article>
                <TableHeader>
                    <li>id</li>
                    <li>Palavra-chave</li>
                    <li>Data de criação</li>
                    <li>Status</li>
                </TableHeader>
                {requestStore.requests.map(request => 
                    <TableItem key={request.id}>
                        <p>{request.id}</p>
                        <p>{request.keyword}</p>
                        <p>{request.created}</p>
                        <p>{request.status}</p>
                    </TableItem>
                )}
            </article>
        </Main>
    ));
};