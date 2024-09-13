import "./Checkbox.css";

function Checkbox() {
    return (
        <>
            <div className="form__campo-checkbox">
                <input 
                    type='checkbox'
                    id='lembrar'
                />
                <label 
                    for='lembrar'
                />
            </div>
            <p className="form__opcoes-texto">Lembrar-me</p>
        </>
    );
};

export default Checkbox;