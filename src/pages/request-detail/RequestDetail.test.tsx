import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../../App';

describe("Request-detail test case", () => {
    it("should render urls in details page", () => {
        render(<App />);
        const buttonOne = screen.getByText("Cadastre uma nova inspeção");
        fireEvent.click(buttonOne);
        const input = screen.getByTestId("keyword");
        for (let i = 0; i <= 8; i++) {
            fireEvent.keyPress(input, {key: 'A', code: 'KeyA'});
        }
        const sendButton = screen.getByText("enviar");
        fireEvent.click(sendButton);
        window.setTimeout(() => {
            const loadingMessage = screen.getByText("Solicitação criada!");
            expect(loadingMessage).toBeInTheDocument();
            const buttonPushToSolicitations = screen.getByText("Veja lista de Solicitações");
            fireEvent.click(buttonPushToSolicitations);
            const solicitation = screen.getByText("aaaaaaaa");
            expect(solicitation).toBeInTheDocument();
            fireEvent.click(solicitation);
            expect(screen.getByText("Detalhes da solicitação")).toBeInTheDocument();
        }, 3000);
    })
});