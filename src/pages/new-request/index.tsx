import React from 'react';
import {Main, ErrorMessage} from './styles';

export const NewRequest = () => {
    const [formData, setFormData] = React.useState({
        keyword: ""
    });
    const [errorData, setErrorData] = React.useState({code: 0, name: "Sem erro"});

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value});
    }

    async function formSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            let requestHeader = new Headers();
            requestHeader.append("Content-Type", "application/json");
            const rawData = JSON.stringify(formData);
            const response = await fetch("http://testapp.axreng.com:3000/", {
                method: "POST",
                headers: requestHeader,
                body: rawData
            });
            if (response.status >= 204) {
                throw new Error("Erro no envio, tente novamente.")
            }
            console.log(response);
        } catch (error) {
            setErrorData({ code: 1, name: error.message});
        }
    }
    return (
        <Main>
            <h1>Faça uma nova solicitação</h1>
            <p>
                Ao receber uma solicitação de
                inspeção, o serviço de backend inicia a busca pela palavra chave informada na solicitação.
                A API de consulta informa
                as URLs que foram encontradas, contendo a palavra chave.
            </p>
            <form onSubmit={formSubmit}>
                <label htmlFor="keyword">
                    <h4>Palavra chave:</h4>
                    {errorData.code !== 0 ? <ErrorMessage>{errorData.name}</ErrorMessage> : null}
                    <input 
                        type="text"
                        id="keyword"
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </Main>
    );
}