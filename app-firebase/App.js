import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/LoginScreen';
import RegistroScreen from './components/RegistroScreen';
import HomeScreen from './components/HomeScreen';
import ProdutoScreen from './components/ProdutoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (<NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name='Login' component={LoginScreen}/>
              <Stack.Screen name='Registrar' component={RegistroScreen}/>
              <Stack.Screen name='Home' component={HomeScreen}/>
              <Stack.Screen name='Produto' component={ProdutoScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
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
