import React from "react";
import { View, Text, Button } from "react-native";
import { autenticacao } from "../firebase";
import { signOut } from "firebase/auth";

function HomeScreen( { navigation, route } ){

    const {email, uid} = route.params;

    const sairDoHome = () =>{
        signOut(autenticacao).then(() => navigation.navigate('Login'));
    }

    return (<View>
                <Text>Bem vindo a tela inicial!</Text>
                <Text>Email: {email}</Text>
                <Text>Uid: {uid}</Text>
                <Button title="Ir para Produtos" onPress={() => navigation.navigate("Produto")}/>
                <Button title="Sair" onPress={sairDoHome}/>
        </View>

    );
}

export default HomeScreen;
