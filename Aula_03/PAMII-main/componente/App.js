import React from 'react';
import { View, Text, Image, ScrollView, TextInput} from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
        style={{
          fontSize: 45,
          alignSelf: "center",
          color: "green",
        }}
        >
          Snorlax Berrie
        </Text>
        <Image
        source= {require('./assets/pikachu.png')}
        style={{ width: 200, height: 210, alignSelf: "center"}}
        />
      </View>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        margin: 15,
      }}
      defaultValue="Digite aquiiii!"
      />
    </ScrollView>
  );
}

export default Pokemon;