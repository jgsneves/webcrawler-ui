import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import { Header } from '../components/header';
import { Home } from '../pages/home';
import {NewRequest} from '../pages/new-request';
import { Solicitations } from '../pages/solicitations';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route component={Home} path='/' exact/>
            <Route component={NewRequest} path='/nova-solicitacao'/>
            <Route component={Solicitations} path='/solicitacoes'/>
        </BrowserRouter>
    )
}

export default Routes;