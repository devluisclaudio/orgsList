import React, { useState, useEffect} from "react";

import { Image, Text, View, StyleSheet} from 'react-native'

import logo from '../../../assets/logo.png'

import { carregaTopo } from "../../../services/carregaDados";
export default function Topo () {
    const [titulo, setTitulo] = useState('');
    const [legenda, setLegenda] = useState('');

    useEffect(()=> {
        carregaTopo().then(({ data }) => {
            setTitulo(data.boaVindas)
            setLegenda(data.legenda)
        }).catch(() => alert('Falha na conexão') )
    }, []);
    return <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem}/>
        <Text style={estilos.boasVindas} >{titulo}</Text>
        <Text style={estilos.legenda}>{legenda}</Text>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    }
})