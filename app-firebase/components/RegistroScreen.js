import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { autenticacao } from "../firebase";

function RegistroScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastroUsuario = async () => {
        
       try {
           const registro_usuario = await createUserWithEmailAndPassword(auth, email, senha);
           id_usuario = registro_usuario.user;
           await sendEmailVerification(id_usuario);
           Alert.alert('Sucesso', 'Conta Criada com sucesso');
           navigation.navigate('Login');
       }catch(error) {
           Alert.alert('Erro', error.message);
       }

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