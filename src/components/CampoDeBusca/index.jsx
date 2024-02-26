import Image from 'next/image';

import style from './CampoDeBusca.module.css';
import lupa from '../../../public/assets/lupa.png';


export default function CampoDeBusca({textoDigitado, filtrarTextoDigitado}) {
    return (
        <div className={style.barra_busca}>
            <Image src={lupa} alt="" />
            <input
                type="text"
                value={textoDigitado}
                onChange={filtrarTextoDigitado}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    );
}