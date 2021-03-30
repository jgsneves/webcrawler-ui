import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { Spinner } from '../../components/spinner';
import { SucessCheck } from '../../components/sucessCheck';
import { useRootStore } from '../../provider';
import {Main, ErrorMessage, SpinnerWrapper} from './styles';
import {api} from '../../helper/service';

enum EnumStage {
    "begin",
    "loading",
    "success"
}

export const NewRequest = () => {
    const {requestStore} = useRootStore();

    const [stage, setStage] = React.useState<EnumStage>(EnumStage.begin);
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
        setStage(EnumStage.loading);
        try {
            let requestHeader = new Headers();
            requestHeader.append("Content-Type", "application/json");
            const rawData = JSON.stringify(formData);
            const response = await fetch(api, {
                method: "POST",
                headers: requestHeader,
                body: rawData
            }).then(res => res.json());
            const currentDate = new Date();
            const newRequest = {
                "keyword": formData.keyword,
                "id": response["id"],
                "created": currentDate.toLocaleDateString("pt-br"),
                "status": "Criada",
                "urls": []
            }

            requestStore.addRequest(newRequest);
            setStage(EnumStage.success);

            if (response.status >= 204) {
                throw new Error("Erro no envio, tente novamente.")
            }
        } catch (error) {
            setStage(EnumStage.begin);
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
            {stage === EnumStage.begin ? (
                <form onSubmit={formSubmit}>
                    <label htmlFor="keyword">
                        <h4>Palavra-chave:</h4>
                        {errorData.code !== 0 ? <ErrorMessage>{errorData.name}</ErrorMessage> : null}
                            <input 
                                type="text"
                                data-testid="keyword"
                                id="keyword"
                                onChange={handleInputChange}
                            />
                    </label>
                    <div>
                        <Button type="submit">enviar</Button>
                        <Link to="/">
                            <Button secondary>voltar</Button>
                        </Link>
                    </div>
                </form>
            ) : null}
           {stage === EnumStage.loading ? (
               <SpinnerWrapper>
                   <Spinner />
                   <h3>Carregando...</h3>
               </SpinnerWrapper>
           ) : null}
           {stage === EnumStage.success ? (
                <SpinnerWrapper>
                    {SucessCheck()}
                    <h3>Solicitação criada!</h3>
                    <Link to="/solicitacoes" onClick={() => setStage(EnumStage.begin)}>
                        <Button>Veja a lista de solicitações</Button>
                    </Link>
                </SpinnerWrapper>
           ) : null}
        </Main>
    );
}