import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.footer`
    background-color: #222222;

    & > div {
        width: 700px;
        margin: 0 auto;
    }

    & > div > p {
        ${media.lessThan("small")`
            width: 90vw;
        `}
    }

    & > div > a > svg {
        margin: 32px 0px;
    }
`;

export const SocialMediasWrapper = styled.div`
    padding: 32px 0px;

    & > a {
        margin-right: 16px;

        & > svg {
            &:hover {
                fill: #FFFFFF;
            }
        }
    }
`;