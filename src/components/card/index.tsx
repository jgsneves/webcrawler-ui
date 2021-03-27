import React from 'react';
import {Wrapper} from './styles';

interface IProps {
    title: string;
    explanation: string;
}

export const Card = ({explanation, title}: IProps) => {
    return (
        <Wrapper>
            <h4>{title}</h4>
            <p>{explanation}</p>
        </Wrapper>
    );
}