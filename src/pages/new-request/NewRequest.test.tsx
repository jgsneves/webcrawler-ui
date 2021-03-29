import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('new-request test', () => {
    it("render entire new-request page", () => {
        render(<App />);
        const buttonOne = screen.getByText("Cadastre uma nova inspeção");
        fireEvent.click(buttonOne);
        const title = screen.getByText("Faça uma nova solicitação");
        const input = screen.getByTestId("keyword");
        const sendButton = screen.getByText("enviar");
        const backButton = screen.getByText("voltar");
        expect(title).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(sendButton).toBeInTheDocument();
        expect(backButton).toBeInTheDocument();
    });
    it("should render loading state", () => {
        render(<App/>);
        const sendButton = screen.getByText("enviar");
        fireEvent.click(sendButton);
        const loadingMessage = screen.getByText("Carregando...");
        expect(loadingMessage).toBeInTheDocument();
    });

    it("should render an error 'cause empty input", () => {
        render(<App/>);
        const sendButton = screen.getByText("enviar");
        fireEvent.click(sendButton);
        window.setTimeout(() => {
            const errorMessage = screen.getByText("Erro");
            expect(errorMessage).toBeInTheDocument();
        }, 3000);
    });

    it("should render sucess message", () => {
        render(<App/>);
        const input = screen.getByTestId("keyword");
        for (let i = 0; i <= 8; i++) {
            fireEvent.keyPress(input, {key: 'A', code: 'KeyA'});
        }
        const sendButton = screen.getByText("enviar");
        fireEvent.click(sendButton);
        window.setTimeout(() => {
            const loadingMessage = screen.getByText("Solicitação criada!");
            expect(loadingMessage).toBeInTheDocument();
        }, 3000);
    });

    it("should render home page back", () => {
        render(<App/>);
        const backButton = screen.getByText("voltar");
        fireEvent.click(backButton);
        const homeTitle = screen.getByText("Webcrawler");
        expect(homeTitle).toBeInTheDocument();
    });
});