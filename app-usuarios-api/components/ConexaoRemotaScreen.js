import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { atualizarUsuario, deletarUsuario } from '../services/usuarios';

const ConexaoRemota = () => {
    const [usuarios, setUsuarios] = useState([]);
    const navigation = useNavigation();
    const [edicoes, setEdicoes] = useState({});

    const carregarUsuarios = () => {
        fetch('http://127.0.0.1:5009/api/lista_usuarios')
        .then(res => res.json())
        .then(data => {
            console.log("Usuarios recebidos: ", data);
            setUsuarios(data);
            const inicial = {};
            data.forEach( usuario => {
                inicial[usuario.id] = usuario.email;
            })
            setEdicoes(inicial);
        })
        .catch(error => console.error('Erro ao buscar os dados na api ', error));
    }

    useEffect(() => {
        carregarUsuarios();
    }, [])

    const atualizaUsuario = (id) => {
        const email = edicoes[id];
        if (!email) {
            console.error("error", "Por favor, preencha o e-mail para atualizar.")
            return;
        }
        atualizarUsuario(id, email)
            .then(() => {
                console.log("Sucesso: Usuario atualizado com sucesso");
                carregarUsuarios();
            })
            .catch( () => console.error("Erro: falha ao atualizar o usuario") );
    }

    const atualizarEdicao = (id, valor) => {
        setEdicoes(prox => ({
            ...prox,
            [id]: valor
        }));
    }

    const deletaUsuario = (id) => {
        deletarUsuario(id)
            .then(() => {
                console.log("Sucesso: usuario deletado com sucesso.")
                carregarUsuarios();
            })
            .catch(() => console.error("Error: erro ao deletar o usuario"))
    }

    return ( <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Lista de Usuarios
                </Text>
                <FlatList
                    data={usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>ID: {item.id} </Text>
                            <TextInput
                                placeholder='Editar e-mail'
                                value={edicoes[item.id]}
                                onChangeText={(texto) => atualizarEdicao(item.id, texto)}  
                                style={{ backgroundColor: "#fff", padding: 5, marginTop: 5}}
                                keyboardType='email-address'
                                autoCapitalize='none'
                            />
                            <View style={{ flexDirection: 'row', marginTop: 10}}>
                                <Button title='Editar' onPress={ () => atualizaUsuario(item.id)}/>
                                <View style={{width: 10}} />
                                <Button title='Deletar' color="red" onPress={ () => deletaUsuario(item.id)}/>
                            </View>
                        </View>
                    )}
                />
                <View style={{marginTop: 20}}>
                    <Button title="Ir para registro" onPress={ () => navigation.navigate("RegistroScreen")}/>
                </View>
            </View>

    );
}

export default ConexaoRemota;