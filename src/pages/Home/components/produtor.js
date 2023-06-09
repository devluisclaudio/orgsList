import React from "react";

import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native'
export default function Produtor({ nome, imagem, distancia }) {

    return <>
        <TouchableOpacity style={estilos.cartao} onPress={() => { }}>
            <Image source={imagem} style={estilos.imagem}/>
            <View style={estilos.informacoes}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.distancia}>{`${distancia}m`}</Text>
            </View>
        </TouchableOpacity>
    </>

}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        fleDirection: 'row',
        elevation: 4
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }

})