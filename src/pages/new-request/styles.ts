import styled from 'styled-components';

export const Main = styled.main`
    margin: 0 auto;
    width: 700px;

    & > p {
        margin: 16px 0px 40px 0px;
    }

    & > form > label {
        display: flex;
        flex-direction: column;
    }
    
    & > form > label > input {
        font-family: Inter;
        font-size: 14px;
        line-height: 19.6px;
        letter-spacing: 0.7px;
        display: block;
        min-height: 48px;
        width: 200px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-image: initial;
        border-bottom: 2px solid rgb(221, 221, 221);
        outline: none;
        margin-bottom: 32px;
        padding: 0px;
        background-color: rgb(255, 255, 255);
        appearance: none;
        border-radius: 0px;
        resize: none;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    background-color: pink;
    border: 1px solid red;
    border-radius: 4px;
    width: 200px;
    text-align: center;
    font-size: 10px;
    padding: 4px;
    margin-top: 8px;
`;