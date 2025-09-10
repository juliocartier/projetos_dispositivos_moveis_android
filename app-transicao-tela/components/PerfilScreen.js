import React from "react";
import { View, Text, Button } from "react-native";

function PerfilScreen({ navigation }) {
    return (<View 
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
            >
                <Text>Bem a tela de Perfil</Text>
                <Button 
                    title="Voltar a tela Inicial"
                    onPress={() => navigation.goBack()}
                />
            </View>
    );
}

export default PerfilScreen;