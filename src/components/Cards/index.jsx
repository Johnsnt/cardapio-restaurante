import Image from 'next/image';

import style from './Categorias.module.css';

const Card = ({id, imagem, nome, categoria, descricao, preco }) => {
    return (
        <div className={style.card_box}>
            <figure className={style.container_img}>
                <Image src={imagem} alt={nome} />
            </figure>
            <div className={style.container_descricao} key={id}>
                <h3>{nome}</h3>
                <h4>{categoria}</h4>
                <p>{descricao}</p>
            </div>
            <div className={style.container_preco}>
                <span>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(preco)}</span>
            </div>
        </div>
    );
};

export default Card;