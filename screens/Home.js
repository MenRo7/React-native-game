import React from "react";
import { StyleSheet, View, StatusBar, TouchableHighlight, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    function onLongPress(e) {
        if (e.nativeEvent.state === State.ACTIVE) {
            navigation.navigate("Game");
        }
    }

    function onTap(e) {
        if (e.nativeEvent.state === State.ACTIVE) {
            Alert.alert("Long press to start the game");
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1}}>
            <View style={styles.container}>
                <TapGestureHandler onHandlerStateChange={onTap}>
                    <LongPressGestureHandler 
                        onHandlerStateChange={onLongPress}
                        minDurationMs={600}
                    >
                        <View style={styles.button}>
                            <Text style={styles.text}>Start Game !</Text>
                        </View>
                    </LongPressGestureHandler>
                </TapGestureHandler>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'justify-around',
        borderRadius: 150,
        backgroundColor: 'purple',
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
});