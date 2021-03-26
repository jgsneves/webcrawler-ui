import React from 'react';
import {Wrapper, Title} from './styles';

interface IProps {
    title: string;
    explanation: string;
}

export const Card = ({explanation, title}: IProps) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <p>{explanation}</p>
        </Wrapper>
    );
}