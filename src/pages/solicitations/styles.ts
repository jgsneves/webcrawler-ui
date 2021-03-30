import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
    padding-top: 100px;
    max-width: 700px;
    margin: 0 auto;
    min-height: 375px;
    padding-bottom: 95px;

    & > h1 {
        margin-bottom: 8px;
    }

    & > p {
        margin-bottom: 32px;
    }

    & > article > a > button {
        margin-top: 32px;
    }

    ${media.lessThan("small")`
        min-height: 600px;
    `}
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

    ${media.lessThan("small")`
        width: 90vw;
    `}

    & > li {
        width: 25%;
        text-align: center;

        ${media.lessThan("small")`
            width: 85px;
        `}

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

    ${media.lessThan("small")`
        width: 90vw;
    `}

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