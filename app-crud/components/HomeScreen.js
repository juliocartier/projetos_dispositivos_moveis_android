import React from "react";
import { View, Text, Button } from "react-native";
import { autenticacao } from "../firebase";
import { signOut } from "firebase/auth";

function HomeScreen( { navigation } ){

    const sairDoHome = () =>{
        signOut(autenticacao).then(() => navigation.navigate('Login'));
    }

    return (<View>
                <Text>Bem vindo a tela inicial!</Text>
                <Button title="Sair" onPress={sairDoHome}/>
        </View>

    );
}

export default HomeScreen;