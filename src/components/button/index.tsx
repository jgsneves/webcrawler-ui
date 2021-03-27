import React from 'react';
import {ButtonStyle} from './styles';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
    secondary?: boolean;
    text: string;
}

export const Button = ({secondary, text, type}: IProps) => {
    return (
        <ButtonStyle 
            secondary
        >
            {text}
        </ButtonStyle>
    );
}