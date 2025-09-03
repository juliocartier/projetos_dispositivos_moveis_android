import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import PerfilScreen from './PerfilScreen';
 
function HomeScreen() {

    const [contador, setContador ] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    }

    return (<View>
                <Text>Contador: {contador} </Text>
                <Button title='Incrementar' onPress={incrementarContador}/>
            </View>)
}
 
export default HomeScreen;