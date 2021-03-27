import React from 'react';
import {Main, ErrorMessage} from './styles';

export const NewRequest = () => {
    const [formData, setFormData] = React.useState({
        keyword: ""
    });
    const [error, setError] = React.useState({code: 0, name: "Sem erro"});

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value});
        console.log(formData);
    }

    function formSubmit() {
        try {

        } catch (error) {
            setError({ code: 1, name: "Erro na conexão, tente novamente."})
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
                    {error.code !== 0 ? <ErrorMessage>{error.name}</ErrorMessage> : null}
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