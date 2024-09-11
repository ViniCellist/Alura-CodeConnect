import "./CampoDeDigitacao.css";

function CampoDeDigitacao({label, tipo, placeholder}) {
    return (
        <div className='form__campo-digitacao' >
            <label for='email'>{label}</label>
            <input 
                type={tipo}
                placeholder={placeholder}
                required
                id='email'
            />
        </div>
    );
};

export default CampoDeDigitacao;