import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { registrarUsuario } from "../services/usuarios";

const RegistroScreen = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const registraUsuario  = async () => {
        try{
            const resposta = await registrarUsuario(email, senha);
            console.log("Sucessoooo", resposta);
        } catch(erro) {
            console.error("Erro", erro.response?.data || "Erro ao registrar");
        }
    }
    return ( <View>
                <TextInput
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    style={{ borderBottomWidth: 1, marginBottom: 10 }}
                />

                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                    style={{ borderBottomWidth: 1, marginBottom: 10 }}
                />

                <Button title="Registrar" onPress={registraUsuario}/>
            </View>

    );
}

export default RegistroScreen;