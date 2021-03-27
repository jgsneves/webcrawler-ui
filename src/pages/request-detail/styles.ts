import styled from 'styled-components';

export const Main = styled.main`
    width: 700px;
    margin: 0 auto;

    & > section > div {
        display: flex;
        margin: 25px 0px;
    }

    & > section > div > * {
        width: 50%;
    }

    & > section > div > ul {
        margin-left: 35px;
    }
`;