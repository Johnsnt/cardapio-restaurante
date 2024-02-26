import Image from 'next/image';

import style from './CampoDeBusca.module.css';
import lupa from '../../../public/assets/lupa.png';


export default function CampoDeBusca() {
    return (
        <div className={style.barra_busca}>
            <Image src={lupa} alt="" />
            <input
                type="text"
                placeholder="Place Holder épico"
            />
        </div>
    );
}