import React from 'react';
import {RequestStore} from './RequestStore';

type RootStateContextValue = {
    requestStore: RequestStore;
}

const RootStateContext = React.createContext<RootStateContextValue>(
    {} as RootStateContextValue
);

const requestStore = new RequestStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return (
        <RootStateContext.Provider value={{requestStore}}>
            {children}
        </RootStateContext.Provider>
    );
}

export const useRootStore = () => React.useContext(RootStateContext);