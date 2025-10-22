import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function ProdutoScreen(){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [editarId, setEditarId] = useState(null);

    const listarProdutos = async () => {
        const listas_de_produtos = await getDocs(collection(db, "produtos"));
        const lista_produto = listas_de_produtos.docs.map(doc => ({id: doc.id, ...doc.data() }));
        console.log("Todos os produtos = ",lista_produto);
        setProdutos(lista_produto);
    }

    useEffect( () => {
        listarProdutos();
    }, []);

    const salvarEditarProdutos = async () => {
        if(editarId) {
            await updateDoc(doc(db, 'produtos', editarId), {nome, preco: Number(preco) });
            setEditarId(null);
        } else {
            await addDoc(collection(db, 'produtos'), {nome, preco: Number(preco)});
        }
        setNome('');
        setPreco('');
        listarProdutos();
    }

    const editarProduto = (produto) => {
        setNome(produto.nome);
        setPreco(produto.preco.toString());
        setEditarId(produto.id);
    }

    const deletarProduto = async (id) => {
        await deleteDoc(doc(db, 'produtos', id));
        listarProdutos();
    }

    return (<View>
                <TextInput
                    placeholder="Nome do Produto"
                    value={nome}
                    onChangeText={setNome}
                    style={{ borderBottomWidth: 1 }}
                />

                <TextInput
                    placeholder="Preco"
                    value={preco}
                    onChangeText={setPreco}
                    style={{ borderBottomWidth: 1, marginBottom: 10 }}
                />
                <Button title={editarId ? "Atualizar": "Adicionar"}
                        onPress={salvarEditarProdutos}
                />

                <FlatList
                    data={produtos}
                    keyExtractor={(item) => item.id}
                    renderItem={ ({item}) => (
                        <View>
                            <Text>{item.nome} - R${item.preco} </Text>
                            <Button title="Editar" onPress={() => editarProduto(item)} />
                            <Button title="Deletar" onPress={() => deletarProduto(item.id)} color="red"/>
                        </View>
                    )}
                />
            </View>
    );
 
}

export default ProdutoScreen;