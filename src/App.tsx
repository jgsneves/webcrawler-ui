import React from 'react';
import { RootStateProvider } from './provider';
import Routes from './routes/routes';

function App() {
    return (
        <RootStateProvider>
            <Routes />
        </RootStateProvider>
    );
}

export default App;