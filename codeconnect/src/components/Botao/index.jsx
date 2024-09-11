import "./Botao.css";

function Botao({children}) {
    return (
        <button 
            type="submit"
            className="form__botao"
        >
            {children}
        </button>
    )
}

export default Botao;