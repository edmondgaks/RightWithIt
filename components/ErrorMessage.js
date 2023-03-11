import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText';

function ErrorMessage({ error, visible }) {
    if(!visible || !error) return null;
    return (
       <Text style={styles.error}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    error: { 
        color: "red",
        alignSelf: "flex-start",
        fontSize: 12,
        marginLeft: 50,
    },
})

export default ErrorMessage; 