import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../imgs/detalhe_contato.png');

export default function CenaContatos(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar 
        backgroundColor = '#CCC'
      />
      
      <BarraNavegacao voltar navigator={ props.navigator } />
      
      <View style={ styles.cabecalho }>
        <Image source={ detalheContato } />
        <Text style={ styles.txtTitulo }>Nossos Contato</Text>
      </View>

      <View style={ styles.detalheContatos }>
        <Text style={ styles.txtContato }>TEL: (11) 98816-1442</Text>
        <Text style={ styles.txtContato }>CEL: (11) 98816-1442</Text>
        <Text style={ styles.txtContato }>EMAIL: jorgegru@gmail.com</Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        padding: 20,
        marginTop: 20
    },
    txtContato: {
        fontSize: 18
    }
});
