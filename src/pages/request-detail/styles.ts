import styled from 'styled-components';

export const Main = styled.main`
    width: 700px;
    margin: 0 auto;
    min-height: 375px;

    & > section > div {
        display: flex;
        margin: 25px 0px;

        &:last-child {
            flex-direction: column;
        }
    }

    & > section > div > * {
        width: 50%;
    }

    & > section > div > ul {
        list-style: none;
    }

    & > section > div > a {
        margin: 32px 0px;
    }

    & > section > div > ul > a {
        display: flex;
        width: 700px;
        justify-content: space-between;
        text-decoration: none;
        border: 2px solid #dddddd;
        border-radius: 6px;
        padding: 10px;
        margin-top: 8px;
        cursor: pointer;
        color: black;
    }
`;