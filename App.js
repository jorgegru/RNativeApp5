import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'
import CenaContatos from './src/components/CenaContatos';

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

        if (route.id === 'c') {
          return (<CenaContatos navigator={ navigator } />);
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
