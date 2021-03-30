import styled from 'styled-components';

export const Main = styled.main`
    padding-top: 100px;
    max-width: 700px;
    margin: 0 auto;
    min-height: 375px;

    & > section > div {
        display: flex;
        margin: 25px 0px;
        align-items: center;

        &:nth-child(4) {
            & > p {
                display: flex;
            }

            & p > svg {
                stroke: green;
                width: 20px;
                height: 20px;
                margin-right: 8px;
            } 
        }

        &:last-child {
            flex-direction: column;
            align-items: flex-start;

            & > p {
                margin: 16px 0px;
            }
        }
    }

    & > section > div > * {
        width: 50%;
    }

    & > section > div > ul {
        list-style: none;
        max-height: 300px;
        width: inherit;
        overflow-y: scroll;
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