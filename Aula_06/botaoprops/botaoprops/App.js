import React from 'react';
import {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BotaoProps from './components/BotaoProps.js';

const App = () => {
  
  return (
    <View style={estilera.caixa}>
      <BotaoProps 
        label="Oi" 
        corFundo="green"
        msg={"oi pessoal"}
      />
      <BotaoProps 
        label="Otton" 
        corFundo="yellow"
        msg={"otton é safado"}
      />
    </View>
  );
};

const estilera = StyleSheet.create({
  caixa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

