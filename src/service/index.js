import { produtosDados } from '../data/data-produtos.js';


const retornarListaProdutos = () => {
    return produtosDados;
};

const filtrarItemsMenu = (categoria) => {
    return produtosDados.filter((item) => item.categoria === categoria);
};

const filtrarEntradas = filtrarItemsMenu("Entradas");

const buscarItem = (textoDigitado) => {
    if (textoDigitado.length >= 3) {
        return (
            produtosDados.filter((item) =>
                item.descricao.toLowerCase().replace(/\s/g, "").includes(textoDigitado.toLowerCase()) ||
                item.nome.toLowerCase().replace(/\s/g, "").includes(textoDigitado.toLowerCase()))
        );
    } else {
        return produtosDados;
    }
};

export { retornarListaProdutos, filtrarItemsMenu, filtrarEntradas, buscarItem };