import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Home } from '../pages/home';
import {NewRequest} from '../pages/new-request';
import { RequestDetailed } from '../pages/request-detail';
import { Solicitations } from '../pages/solicitations';

const Routes = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route component={RequestDetailed} path="/solicitacoes/:id"/>
                <Route component={Solicitations} path="/solicitacoes"/>
                <Route component={NewRequest} path="/nova-solicitacao"/>
                <Route component={Home} path="/" exact/>
            </Switch>
            <Footer />
        </>
    )
}

export default Routes;