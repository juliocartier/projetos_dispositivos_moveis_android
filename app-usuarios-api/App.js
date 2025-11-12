import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConexaoRemota from './components/ConexaoRemotaScreen';
import RegistroScreen from './components/RegistroScreen';
import CounterScreen from './src/view/CounterScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return ( <Provider store={store}>
            <CounterScreen/>
          </Provider>
          /*<NavigationContainer>
              <Stack.Navigator initialRouteName='CounterScreen'>
                <Stack.Screen name='CounterScreen' component={CounterScreen}/>
                <Stack.Screen name='RegistroScreen' component={RegistroScreen}/>
                <Stack.Screen name='ConexaoRemota' component={ConexaoRemota}/>
              </Stack.Navigator>
           </NavigationContainer>
           */
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
