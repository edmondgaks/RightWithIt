import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppText({children}) {
    return (
        <Text>{children}</Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    }
})