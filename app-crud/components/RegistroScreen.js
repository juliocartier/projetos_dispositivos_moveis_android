import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { autenticacao } from "../firebase";

function RegistroScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastroUsuario = () => {
        createUserWithEmailAndPassword(autenticacao, email, senha)
        .then(() => {
            console.log("Conta criada com sucesso.")
            navigation.navigate('Login');
        })
        .catch(error => {
            console.log("Erro ao salvar no firebase: " + error.mensage);
        })
    }

    return (<View>
                <Text>Cadastro</Text>
                <TextInput placeholder="E-mail" onChangeText={setEmail} value={email} />
                <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha} />
                <Button title="Cadastrar" onPress={cadastroUsuario} />
            </View>

    );

}

export default RegistroScreen;