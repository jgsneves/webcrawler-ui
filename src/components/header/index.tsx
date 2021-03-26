import React from 'react';
import {HeaderTag} from './styles'; 
import { AxurLogo } from '../logo';

export const Header = () => {
    return (
        <HeaderTag>
            {AxurLogo()}
            <h4>Experiências digitais mais seguras</h4>
        </HeaderTag>
    )
}