import style from './Categorias.module.css';
import Image from 'next/image';

import entradaIcon from '../../../public/assets/entrada.png';
import massaIcon from '../../../public/assets/massa.png';
import carneIcon from '../../../public/assets/carne.png';
import bebidasIcon from '../../../public/assets/bebidas.png';
import saladaIcon from '../../../public/assets/salada.png';
import sobremesaIocn from "../../../public/assets/sobremesa.png";

export default function CategoriaBotao({ entradas, massas, carnes, bebidas, saladas, sobremesas, botaoClidado }) {
    return (
        <div className={style.container_botao}>
            <button className={`${style.botao} ${botaoClidado === "Entradas" ? style.acenderBtn : style.apagarBtn}`} onClick={() => entradas()}>
                <Image className={style.img} src={entradaIcon} alt="botão" />
                <p>Entradas</p>
            </button>
            <button className={`${style.botao} ${botaoClidado === "Massas" ? style.acenderBtn : style.apagarBtn}`} onClick={() => massas()}>
                <Image className={style.img} src={massaIcon} alt="botão" />
                <p>Massas</p>
            </button>
            <button className={`${style.botao} ${botaoClidado === "Carnes" ? style.acenderBtn : style.apagarBtn}`} onClick={() => carnes()}>
                <Image className={style.img} src={carneIcon} alt="botão" />
                <p>Carnes</p>
            </button>
            <button className={`${style.botao} ${botaoClidado === "Bebidas" ? style.acenderBtn : style.apagarBtn}`} onClick={() => bebidas()}>
                <Image className={style.img} src={bebidasIcon} alt="botão" />
                <p>Bebidas</p>
            </button>
            <button className={`${style.botao} ${botaoClidado === "Saladas" ? style.acenderBtn : style.apagarBtn}`} onClick={() => saladas()}>
                <Image className={style.img} src={saladaIcon} alt="botão" />
                <p>Saladas</p>
            </button>
            <button className={`${style.botao} ${botaoClidado === "Sobremesas" ? style.acenderBtn : style.apagarBtn}`} onClick={() => sobremesas()}>
                <Image className={style.img} src={sobremesaIocn} alt="botão" />
                <p>Sobremesas</p>
            </button>
        </div>
    );
}