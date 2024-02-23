import Image from 'next/image';

import style from './Categorias.module.css';

const Card = ({ imagem, nome, categoria, descricao, preco }) => {
    return (
        <div>
            <Image src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <h4>{categoria}</h4>
            <p>{descricao}</p>
            <span>{preco}</span>
        </div>
    );
};

export default Card;