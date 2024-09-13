import "./ItemSocial.css";

function ItemSocial({link, nome}) {
    return(
        <li>
            <a href={link}>
                <img src={`../../assets/img/${nome}.svg`} alt={`ícone do ${nome}`} />
                {nome}
            </a>
        </li>
    );
};

export default ItemSocial;