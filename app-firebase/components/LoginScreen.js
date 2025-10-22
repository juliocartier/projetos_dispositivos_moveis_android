import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { autenticacao } from "../firebase";

function LoginScreen( {navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const realizarLogin = async () => {
        try {
            const credencias_do_usuario = await signInWithEmailAndPassword(autenticacao, email, senha);
            const usuario = credencias_do_usuario.user;
            console.log(usuario);
            navigation.navigate('Home', {
                email: usuario.email,
                uid: usuario.uid
            });
        } catch (error) {
            console.log(error.message);
            if (error.code === 'auth/wrong-password'){
                console.log("Senha incorreta, Tente novamente.");
            } else if (error.code === 'auth/user-not-found'){
                console.log("Usuario nao encontrado");
            } else if (error.code === 'auth/invalid-email') {
                console.log("Email Invalido.");
            }
        }

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