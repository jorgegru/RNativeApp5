import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'

export default function App() {
  return (
    <Navigator 
      initialRoute = {{ id: 'a'}}
      renderScene={(route, navigator) => {
        if (route.id === 'a') {
          return (<CenaPrincipal navigator={ navigator } />);
        }

        if (route.id === 'b') {
          return (<CenaClientes navigator={ navigator } />);
        }
      }}
    />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
