import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

describe("home page test", () => {
    render(<App />);
    it("should render entire home page", () => {
        const title = screen.getByText("Webcrawler");
        const subTitle = screen.getByText("Automação na busca de termos na internet");
        const explanationText = screen.getByText(
            "Inicie uma nova busca, ou verifique o resultado de solicitações feitas."
        );
        const buttonOne = screen.getByText("Cadastre uma nova inspeção");
        const buttonTwo = screen.getByText("Consulte uma inspeção");
        expect(title).toBeInTheDocument();
        expect(subTitle).toBeInTheDocument();
        expect(explanationText).toBeInTheDocument();
        expect(buttonOne).toBeInTheDocument();
        expect(buttonTwo).toBeInTheDocument();
    });
    it("button should redirect to new-request page", () => {
        render(<App />);
        const buttonOne = screen.getByText("Cadastre uma nova inspeção");
        fireEvent.click(buttonOne);
        const title = screen.getByText("Faça uma nova solicitação");
        expect(title).toBeInTheDocument();
    });
});