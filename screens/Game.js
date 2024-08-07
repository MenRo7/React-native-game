import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Alert, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnimatedButton from "../components/AnimatedButton";

export default function Game() {
    const[choice, setChoice] = useState('');
    const baseNumber = Math.floor(Math.random() * 100);
    const score = Math.floor(Math.random() * 100);

    const navigation = useNavigation();
    useEffect(() => {
        if(choice) {
            console.log(`Base number: ${baseNumber} et Score: ${score}`);
            const winner =
                choice === "higher" && score > baseNumber ||
                choice === "lower" && score < baseNumber;
            Alert.alert(
                winner ? "You win!" : "You lose!",
                `The number was ${baseNumber}`
            );
            navigation.goBack();
        }
    }, [baseNumber, score, choice]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.baseNumber}>Starting: {baseNumber}</Text>
            <AnimatedButton onPress={() => setChoice("higher")} action="higher" />
            <AnimatedButton onPress={() => setChoice("lower")} action="lower" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    baseNumber: {
        fontSize: 48,
        marginBottom: 30,
    },
});