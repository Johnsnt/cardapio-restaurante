import style from './Categorias.module.css';
import Image from 'next/image';

import entradaIcon from '../../../public/assets/entrada.png';
import massaIcon from '../../../public/assets/massa.png';
import carneIcon from '../../../public/assets/carne.png';
import bebidasIcon from '../../../public/assets/bebidas.png';
import saladaIcon from '../../../public/assets/salada.png';
import sobremesaIocn from "../../../public/assets/sobremesa.png";

export default function CategoriaBotao({entradas, massas, carnes, bebidas, saladas, sobremesas}) {
    return (
        <div className={style.container_botao}>
            <button className={style.botao}>
                <Image className={style.img} onClick={() => entradas("Entradas")}  src={entradaIcon} alt="botão" />
                <p>Entradas</p>
            </button>
            <button className={style.botao} onClick={() => massas("Massas")}>
                <Image className={style.img} src={massaIcon} alt="botão" />
                <p>Massas</p>
            </button>
            <button className={style.botao}>
                <Image className={style.img} onClick={() => carnes("Carnes")} src={carneIcon} alt="botão" />
                <p>Carnes</p>
            </button>
            <button className={style.botao}>
                <Image className={style.img} onClick={() => bebidas("Bebidas")} src={bebidasIcon} alt="botão" />
                <p>Bebidas</p>
            </button>
            <button className={style.botao}>
                <Image className={style.img} onClick={() => saladas("Saladas")} src={saladaIcon} alt="botão" />
                <p>Saladas</p>
            </button>
            <button className={style.botao}>
                <Image className={style.img} onClick={() => sobremesas("Sobremesas")} src={sobremesaIocn} alt="botão" />
                <p>Sobremesas</p>
            </button>
        </div>

    );
}