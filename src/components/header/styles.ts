import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    width: 100vw;
    margin: 0 auto;
    background-color: #FFFFFF;
    position: fixed;
    
    & > nav {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 700px;
        margin: 0 auto;
    }
`;