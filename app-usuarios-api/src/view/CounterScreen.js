import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

function CounterScreen() {
    const contador = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Contador: {contador}</Text>
            <Button title="Incrementar" onPress={ () => dispatch(increment()) }/>
            <Button title="Decrementar" onPress={ () => dispatch(decrement()) }/>
            <Button title="Resetar" onPress={ () => dispatch(reset()) }/>
        </View>
    );
}

export default CounterScreen;