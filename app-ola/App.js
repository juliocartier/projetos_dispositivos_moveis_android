import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { useState } from 'react';

export default function App() {

  const [novoTexto, setNovoTexto ] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 50, height: 50}}
      />
      <TextInput
        placeholder='Digite o texto'
        onChangeText={novoTexto1 => setNovoTexto(novoTexto1)}
        value={novoTexto}
      />
      <Text>Olá Mundo!</Text>
      <HomeScreen/>
    </View>
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
