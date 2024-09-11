import './PageLogin.css';
import Subtittle from './../Subtittle/index';
import Tittle from './../Tittle/index';
import imagemLogin from '../../assets/img/imagem-login.png';
import CampoDeDigitacao from '../CampoDeDigitacao';
import Botao from '../Botao';

function PageLogin() {
    return (
        <div classname="container-login">
            <img src={imagemLogin} alt="Uma mulher negra de cabelos crespos usando óculos" />

            <section>
                <form>
                    <Tittle>Login</Tittle>
                    <Subtittle />
                    <CampoDeDigitacao
                        label="E-mail ou usuário"  
                        tipo="email"
                        placeholder="Digite o seu e-mail ou senha" 
                    />
                    <CampoDeDigitacao 
                        label="Senha"
                        tipo="password"
                        placeholder="Digite sua senha"
                    />
                    <Botao />
                </form>
            </section>
        </div>
    );
};

export default PageLogin;