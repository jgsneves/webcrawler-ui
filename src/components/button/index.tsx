import React from 'react';
import {ButtonStyle} from './styles';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
    secondary?: boolean;
}

export const Button = ({secondary, children}: IProps) => {
    return (
        <ButtonStyle secondary={secondary}>
            {children}
        </ButtonStyle>
    );
}