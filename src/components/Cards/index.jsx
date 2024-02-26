import Image from 'next/image';

import style from './Categorias.module.css';

const Card = ({ imagem, nome, categoria, descricao, preco }) => {
    return (
        <div className={style.card_box}>
            <figure className={style.container_img}>
            <Image className={style.img} src={imagem} alt={nome} />
            </figure>
            <div className={style.container_descricao}>
            <h3>{nome}</h3>
            <h4>{categoria}</h4>
            <p>{descricao}</p>
            </div>
            <div className={style.preco}>
            <span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(preco)}</span>
            </div>
        </div>
    );
};

export default Card;