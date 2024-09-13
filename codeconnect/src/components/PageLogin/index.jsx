import './PageLogin.css';
import Subtittle from './../Subtittle/index';
import Tittle from './../Tittle/index';
import imagemLogin from '../../assets/img/imagem-login.png';
import CampoDeDigitacao from '../CampoDeDigitacao';
import Botao from '../Botao';
import { useState } from 'react';
import Checkbox from '../Checkbox';
import Fieldset from '../Fieldset';
import Texto from '../Texto';
import Separador from '../Separador';
import Lista from '../Lista';
import ItemSocial from '../ItemSocial';
import Link from './../Link/index';

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
                    <Subtittle>Boas-vindas! Faça seu login</Subtittle>
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
                    <Fieldset>
                        <Checkbox />
                        <p>
                            <a href='#' aria-label='Recuperar senha esquecida'>Esqueci a senha</a>
                        </p>
                    </Fieldset>
                    <Botao>Login</Botao>
                    <Separador>
                        <Texto classe="container-link__titulo">
                            ou entre com outras contas
                        </Texto>
                        <Lista>
                            <ItemSocial link='https://www.github.com' nome='Github' />
                            <ItemSocial link='https://www.google.com' nome='Google' />
                        </Lista>
                        <Texto className="container-link__texto">
                            Ainda não tem conta?
                        </Texto>
                        <Link>Crie seu cadastro</Link>
                    </Separador>
                </form>
            </section>
        </div>
    );
};

export default PageLogin;