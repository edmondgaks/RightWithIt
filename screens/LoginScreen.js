import React from 'react';
import { ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';

function LoginScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/login1.jpg")}>
            <View style={{
                backgroundColor: "transparent",
                flex: 1,
            }}></View>
            <View style={{
                backgroundColor: "#fff",
                flex: 2,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }}>
            <AppTextInput
             autoCapitalize='none'
             autoCorrect={false}
             icon="email"
             keyboardType='email-address'
             placeholder='Email'
             textContentType='emailAddress' />
            
            <AppTextInput
             autoCapitalize='none'
             autoCorrect={false}
             icon="lock"
             secureTextEntry
             placeholder='Password '
             textContentType='password' />
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})

export default LoginScreen;