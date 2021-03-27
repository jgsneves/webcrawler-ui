import React from 'react';
import {Main, CardsList} from './styles';
import { Card } from '../../components/card';
import { Link, BrowserRouter } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <Main>
                <h1>Webcrawler</h1>
                <h3>Automação na busca de termos na internet</h3>
                <p>Inicie uma nova busca, ou verifique o resultado de solicitações feitas.</p>
                <BrowserRouter>
                    <CardsList>
                        <Link 
                            to="/nova-solicitacao"
                            style={{textDecoration: "none"}}    
                        >
                            <Card 
                                title="Cadastre uma nova inspeção" 
                                explanation="Abra uma nova pesquisa em toda a web"
                            />
                        </Link>
                        <Link
                            to="/solicitacoes"
                            style={{textDecoration: "none"}}
                        >
                            <Card
                                title="Consulte uma inspeção"
                                explanation="Verifique o resultado de sua solicitação"
                            />
                        </Link>
                    </CardsList>
                </BrowserRouter>
            </Main>
        </>
    );
}