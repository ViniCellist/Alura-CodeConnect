import "./Link.css";

function Link({children}) {
    return(
        <a href="#" className="container-links__link">
            {children}
        </a>
    );
};

export default Link;