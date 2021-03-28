import styled from 'styled-components';

export const Main = styled.main`
    max-width: 700px;
    margin: 0 auto;
    min-height: 375px;
    background-color: #FFFFFF;

    & > h3 {
        margin-top: 16px;
    }
`;

export const CardsList = styled.nav`
    list-style: none;
    display: flex;
    margin-top: 32px;

    & > a {
        margin-right: 32px;
    }
`;