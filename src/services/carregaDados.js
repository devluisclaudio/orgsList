import produtores from "../mocks/produtores";
import topo from "../mocks/topo";
import api from "./api";



export const carregaProdutores = () => {
    return api.get('produtores')
}

export const carregaTopo = () => {
    return api.get('topo')
}