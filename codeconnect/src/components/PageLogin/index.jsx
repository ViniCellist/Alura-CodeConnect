import './PageLogin.css';
import Subtittle from './../Subtittle/index';
import Tittle from './../Tittle/index';
import imagemLogin from '../../assets/img/imagem-login.png';
import CampoDeDigitacao from '../CampoDeDigitacao';
import Botao from '../Botao';
import { useState } from 'react';

function PageLogin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email' + email);
        console.log('senha' + senha);
    }

    return (
        <div classname="container-login">
            <img src={imagemLogin} alt="Uma mulher negra de cabelos crespos usando óculos" />

            <section>
                <form onSubmit={handleSubmit}>
                    <Tittle>Login</Tittle>
                    <Subtittle>Boas vindas! Faça seu login</Subtittle>
                    <CampoDeDigitacao
                        label="E-mail ou usuário"  
                        tipo="email"
                        placeholder="Digite o seu e-mail ou usuario" 
                        value={email}
                        setValor={setEmail}
                    />
                    <CampoDeDigitacao 
                        label="Senha"
                        tipo="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        setValor={setSenha}
                    />
                    <Botao>Login</Botao>
                </form>
            </section>
        </div>
    );
};

export default PageLogin;