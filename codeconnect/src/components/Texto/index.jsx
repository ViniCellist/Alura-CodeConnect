import "./Texto.css";

function Texto({classe, children}) {
    return(
        <p className={classe}>{children}</p>
    );
};

export default Texto;