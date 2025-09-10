import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const realizarLogin = () => {
        if( email.trim() === '' ){
            console.log("O campo esta totalmente vazio");
        } else {
            navigation.navigate('TelaInicial', { email })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email: </Text>
            <TextInput
                placeholder="Digite seu e-mail"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Login" onPress={realizarLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    }

})

export default LoginScreen;