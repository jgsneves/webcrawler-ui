import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 150px;
    border-radius: 6px;
    border: 3px solid black;
    padding: 15px 10px;
    cursor: pointer;
    background-color: #FFFFFF;
    text-align: left;

    &:hover {
        border: 3px solid #F48F42;
        background-color: #ff5824;

        & > h4, p {
            color: #FFFFFF;
        }
    }

    & > h4 {
        margin-bottom: 16px;
        text-decoration: none;
        color: black;
    }
`;
