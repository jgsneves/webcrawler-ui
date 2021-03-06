import styled from 'styled-components';

export const ButtonStyle = styled.button<{secondary?: boolean}>`
    display: inline-block;
    height: 48px;
    padding: ${props => props.secondary ? '10px 30px' : '12px 32px'};
    margin-right: 16px;
    border-radius: 4px;
    text-decoration: none;
    color: ${props => props.secondary ? 'black' : '#FFFFFF'};
    background-color: ${props => props.secondary ? '#FFFFFF' : '#ff5824'};
    font-size: 12.6px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.8px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    border: ${props => props.secondary ? '2px solid black' : 'none'};

    &:hover {
        background-color: #ED4433;
    }
`;