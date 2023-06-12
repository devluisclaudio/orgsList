import React, { useState, useEffect } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

import { carregaProdutores } from '../../../services/carregaDados'
import Produtor from './produtor'

export default function Produtores() {
    const [titulo, setTitulo] = useState('')
    const [lista, setLista] = useState([])

    useEffect(() => {
        carregaProdutores().then(({ data }) => {
            setTitulo(data.titulo)
            setLista(data.lista)
        }).catch(() => alert('Não encontrou produtores'))

    }, [])

    const TopoLista = () => {
        return <Text style={estilos.titulo}>{titulo}</Text>
    }

    return <>
        <FlatList
            data={lista}
            renderItem={({ item }) => <Produtor {...item} />}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={TopoLista}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginTop: 16,
        fontWeight: 'bold',
        marginHorizontal: 16,
        color: '#464646'
    }
})