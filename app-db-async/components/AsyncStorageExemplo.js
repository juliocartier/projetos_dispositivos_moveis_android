import React, { useState } from "react";
import { View, Button, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageExemplo = () => {

    const [valor, setValor] = useState('');
    const [armazenarValor, setArmazenarValor] = useState('');

    const salvarDado = async () => {
        try {
            await AsyncStorage.setItem("minhaChave", valor);
        } catch (e) {
            console.error("Falha ao salvar o dado: ", e);
        }
    }

    const buscarDado = async () => {
        try {
            const dado = await AsyncStorage.getItem("minhaChave");
            if (dado !== null) {
                setArmazenarValor(dado);
            }
        } catch (e) {
            console.error("Falha ao buscar os dados: ", e);
        }
    }

    return (<View>
                <TextInput
                    placeholder="Entre com um valor"
                    value={valor}
                    onChangeText={setValor}
                    style={{ borderWidth: 1, marginBottom: 10 }}
                />
                <Button title="Salvar Dado" onPress={salvarDado}/>
                <Button title="Retornar Dado" onPress={buscarDado}/>

                <Text> Valor Armazenado: {armazenarValor}</Text>
            </View>
    );

}
export default AsyncStorageExemplo;