import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function AppButton({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 50,
        width: "50%"
    },
    text: {
        color: "#fff",
        fontSize: 20, 
    },
})
export default AppButton;