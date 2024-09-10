import './PageLogin.css';
import Subtittle from './../Subtittle/index';
import Tittle from './../Tittle/index';
import imagemLogin from '../../assets/img/imagem-login.png';

function PageLogin() {
    return (
        <div classname="container-login">
            <img src={imagemLogin} alt="Uma mulher negra de cabelos crespos usando óculos" />

            <section>
                <form>
                    <Tittle />
                    <Subtittle />
                    <div className='form__campo-digitacao' >
                        <label for='email'>E-mail ou usuário</label>
                        <input 
                            type='email'
                            placeholder='Digite o seu e-mail ou usuário'
                            required
                            id='email'
                        />
                    </div>
                    <div className='form__campo-digitacao'>
                        <label for="senha">Senha</label>
                        <input 
                            type="password" 
                            placeholder='Digite sua senha'
                            required
                            id="senha"
                        />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default PageLogin;