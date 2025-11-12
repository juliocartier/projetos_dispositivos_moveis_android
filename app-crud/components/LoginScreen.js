import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { autenticacao } from "../firebase";

function LoginScreen( {navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const realizarLogin = () => {
        signInWithEmailAndPassword(autenticacao, email, senha)
        .then(() => {
            navigation.navigate('Home');
        })
        .catch(error => {
            console.log("Erro ao realizar o login" + error.message);
        })

    }

    return (<View>
                <Text>Login</Text>
                <TextInput placeholder="E-mail" onChangeText={setEmail} value={email}/>
                <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha}/>
                <Button title="Entrar" onPress={realizarLogin}/>
                <Button title="Cadastrar" onPress={() => navigation.navigate("Registrar")}/>
            </View>
    );

}

export default LoginScreen;