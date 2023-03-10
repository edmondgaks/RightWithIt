import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform, TextInput, StyleSheet ,View } from 'react-native';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        width: "80%",
        marginVertical: 10,
    },
    textInput: {
        width: "100%",
        fontSize: 18,
        color: '#0c0c0c',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;