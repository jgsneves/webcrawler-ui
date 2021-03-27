import React from 'react';
import {Main, TableHeader, TableItem} from './styles';

export const Solicitations = () => {
    return (
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
                <TableItem>
                    <p>abfdh31</p>
                    <p>teste</p>
                    <p>25/03/2021</p>
                    <p>Active</p>
                </TableItem>
            </article>
        </Main>
    );
}