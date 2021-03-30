import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
    width: 100vw;
    margin: 0 auto;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 1000;
    
    & > nav {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 700px;
        margin: 0 auto;
    }

    & > nav > h4 {
        ${media.lessThan("small")`
            display: none;
        `}
    }
`;