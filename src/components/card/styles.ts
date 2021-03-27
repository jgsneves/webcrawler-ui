import styled from 'styled-components';

export const Wrapper = styled.button`
    width: 150px;
    border-radius: 6px;
    border: 3px solid black;
    padding: 15px 10px;
    margin: 0px 20px;
    cursor: pointer;
    background-color: #FFFFFF;
    text-align: left;

    &:hover {
        border: 3px solid #F48F42;
    }

    & > h4 {
        margin-bottom: 16px;
        text-decoration: none;
        color: black;
    }
`;
