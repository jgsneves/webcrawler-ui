import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
    padding: 100px 0px 75px 0px;
    max-width: 700px;
    margin: 0 auto;
    min-height: 375px;
    background-color: #FFFFFF;

    & > h3 {
        margin-top: 16px;
    }
    
    ${media.lessThan("small")`
        min-height: 600px;
    `}
`;

export const CardsList = styled.nav`
    list-style: none;
    display: flex;
    margin-top: 32px;

    & > a {
        margin-right: 32px;
    }
`;