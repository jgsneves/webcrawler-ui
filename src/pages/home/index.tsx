import React from 'react';
import {Main, CardsList} from './styles';
import { Header } from '../../components/header';
import { Card } from '../../components/card';

export const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <h1>Webcrawler</h1>
                <h3>Automação na busca de termos na internet</h3>
                <p>Inicie uma nova busca, ou verifique o resultado de solicitações feitas.</p>
                <CardsList>
                    <Card 
                        title="Cadastre uma nova inspeção" 
                        explanation="Abra uma nova pesquisa em toda a web"
                    />
                    <Card
                        title="Consulte uma inspeção"
                        explanation="Verifique o resultado de sua solicitação"
                    />
                </CardsList>
            </Main>
        </>
    );
}