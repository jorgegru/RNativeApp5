import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default function BarraNavegacao(props) {

  if (props.voltar) {
    return (
      <View style={ styles.barraTitulo }>

        <TouchableHighlight onPress={ () => props.navigator.pop() } >
          <Image source={btnVoltar} />
        </TouchableHighlight>

        <Text style={ styles.titulo }>ATM Consultoria</Text>
      </View>
    );
  }

  return (
    <View style={ styles.barraTitulo }>
      <Text style={ styles.titulo }>ATM Consultoria</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: '#000'
  }
});