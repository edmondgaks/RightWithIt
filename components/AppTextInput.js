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
        borderRadius: 15,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;