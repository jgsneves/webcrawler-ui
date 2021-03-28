import React from 'react';
import { FooterLogo } from './footerLogo';
import { FacebookIcon, InstagramIcon, LinkedinIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from './socialMediaIcons';
import {FooterWrapper, SocialMediasWrapper} from './styles';

export const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                <a href="https://www.axur.com" target="_blank" rel="noreferrer" aria-label="Link para Site Oficial">
                    {FooterLogo()}
                </a>
                <p>
                    © 2021 Axur. Experiências digitais mais seguras. Todos os direitos reservados.
                </p>
                <SocialMediasWrapper>
                    {FacebookIcon()}
                    {InstagramIcon()}
                    {LinkedinIcon()}
                    {SpotifyIcon()}
                    {TwitterIcon()}
                    {YoutubeIcon()}
                </SocialMediasWrapper>
            </div>
        </FooterWrapper>
    );
}