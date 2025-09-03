import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
 
function PerfilScreen() {
    return (<View>
        <Text>
            Aqui é somente o perfil.
            <Button title='Clique aqui' onPress={ () => alert("Botao Pressionado")}/>
        </Text>
    </View>)
}
 
export default PerfilScreen;