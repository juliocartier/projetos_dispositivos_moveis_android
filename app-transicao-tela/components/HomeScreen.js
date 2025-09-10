import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen ({ navigation }) {
    return ( <View 
             style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
             >
                <Text>Bem Vindo ao Home</Text>
                <Button
                    title="Ir para a tela do perfil"
                    onPress={() => navigation.navigate('Perfil')}
                />
            </View>
    );
}

export default HomeScreen;