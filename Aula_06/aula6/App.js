import React from 'react';
import {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BotaoProps from './components/BotaoProps.js';

const App = () => {
  const handlePress = () => {
    console.log ('Botão pressionado!');
  };

  return(
    <View style= {styles.container}>
      <BotaoProps
      label="Oi"
      corfundo="green"
      acao={handlePress}
      />
    </View>
  );
  <BotaoProps
  label="Olá"
  corfundo="yellow"
  msg={"Olá, tudo bem?"}
  />
  </View>
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App; 