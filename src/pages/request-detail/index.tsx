import React from 'react';
import {Main} from './styles';
export const RequestDetailed = () => {
    return (
        <Main>
            <h1>Detalhes da solicitação</h1>
            <section>
                <div>
                    <h3>Id:</h3>
                    <p>blabla31231</p>
                </div>
                <div>
                    <h3>Palavra-chave:</h3>
                    <p>teste</p>
                </div>
                <div>
                    <h3>Criado em:</h3>
                    <p>25/03/2021</p>
                </div>
                <div>
                    <h3>Status:</h3>
                    <p>Pendente</p>
                </div>
                <div>
                    <h3>Resultado:</h3>
                    <ul>
                        <li>site</li>
                        <li>site</li>
                        <li>site</li>
                    </ul>
                </div>
            </section>
        </Main>
    )
}