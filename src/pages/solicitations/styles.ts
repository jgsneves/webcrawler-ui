import styled from 'styled-components';

export const Main = styled.main`
    width: 700px;
    margin: 0 auto;

    & > h1 {
        margin-bottom: 8px;
    }
`;

export const TableHeader = styled.ul`
    display: flex;
    list-style: none;
    width: 700px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid black;
    margin-top: 32px;
    cursor: default;

    & > li {
        width: 25%;
        text-align: center;

        :first-child {
            text-align: left;
        }

        :last-child {
            text-align: right;
        }
    }
`;

export const TableItem = styled.div`
    display: flex;
    width: 700px;
    justify-content: space-between;
    border: 2px solid #dddddd;
    border-radius: 6px;
    padding: 10px;
    margin-top: 8px;
    cursor: pointer;

    & > p {
        width: 25%;
        text-align: center;

        :first-child {
            text-align: left;
        }

        :last-child {
            text-align: right;
        }
    }
`;