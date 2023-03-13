import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({title}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 50,
        width: "40%",
        margin: 10,
    },
    text: {
        color: "#fff",
        fontSize: 16, 
    },
})
export default AppButton;