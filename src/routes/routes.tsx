import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Header } from '../components/header';
import { Home } from '../pages/home';
import {NewRequest} from '../pages/new-request';
import { Solicitations } from '../pages/solicitations';

const Routes = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route component={Solicitations} path="/solicitacoes"/>
                <Route component={NewRequest} path="/nova-solicitacao"/>
                <Route component={Home} path="/" exact/>
            </Switch>
        </>
    )
}

export default Routes;