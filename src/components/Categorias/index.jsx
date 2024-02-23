import style from './Categorias.module.css';
import Image from 'next/image'


export default function CategoriaBotao({titulo, imagem}) {
    return (
        <div>
            <Image src={imagem} alt="botão" />
            <p>{titulo}</p>
        </div>
    );
}