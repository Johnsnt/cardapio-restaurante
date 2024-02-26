import { produtosDados } from '../data/data-produtos.js';


const retornarListaProdutos = () => {
    return produtosDados;
};

const filtrarItemsMenu = (categoria) => {
    return produtosDados.filter((item) => item.categoria === categoria);
};

const buscarItem = (textoDigitado) => {
    if (textoDigitado.length >= 3) {
        return (produtosDados.filter
            ((item) =>
                item.nome.toLowerCase().includes(textoDigitado.toLowerCase())) ||
            item.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
        );
    } else {
        return produtosDados;
    }
};

export { retornarListaProdutos, filtrarItemsMenu, buscarItem };