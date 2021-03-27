import React from 'react';
import {HeaderTag} from './styles'; 
import { AxurLogo } from '../logo';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <HeaderTag>
            <Link 
                to='/'
                style={{textDecoration: "none", height: "20px"}}
            >
                {AxurLogo()}
            </Link>
            <h4>Experiências digitais mais seguras</h4>
        </HeaderTag>
    )
}