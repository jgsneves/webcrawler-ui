import styled from 'styled-components';

export const ButtonStyle = styled.button<{secondary?: boolean}>`
    display: inline-block;
    height: 48px;
    padding: 12px 32px 14px;
    border-radius: 4px;
    text-decoration: none;
    color: ${props => props.secondary ? '#ff5824' : '#FFFFFF'};
    background-color: ${props => props.secondary ? '#FFFFFF' : '#ff5824'};
    font-size: 12.6px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.8px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: #ED4433;
    }
`;