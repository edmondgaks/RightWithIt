import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';

function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/login2.jpg")}>
            <View style={{
                backgroundColor: "transparent",
                flex: 1,
                justifyContent: "flex-end",
                margin: 30
            }}>
                <Text style={{ 
                    fontSize: 50, 
                    fontWeight: "bold",
                    color: "#fff",
                     }}>Welcome</Text>
                <Text style={{
                    fontSize: 15,
                    color: "#fff"
                }}>Sign up to get started</Text>
            </View>
            <View style={{
                backgroundColor: "#fff",
                flex: 3,
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }}>
            <Text style={{
                alignSelf: "flex-start",
                fontSize: 15,
                marginLeft: 50,
                color: "#8E8C8C",
            }}>Email</Text>
            <AppTextInput 
             autoCapitalize='none'
             autoCorrect={false}
             icon="email"
             keyboardType='email-address'
             placeholder='Email'
             textContentType='emailAddress'
             onChangeText={text => setEmail(text)} />
            <Text style={{
                alignSelf: "flex-start",
                fontSize: 15,
                marginLeft: 50,
                color: "#8E8C8C",
            }}>Password</Text>
            <AppTextInput
             autoCapitalize='none'
             autoCorrect={false}
             icon="lock"
             secureTextEntry
             placeholder='Password'
             textContentType='password'
             onChangeText={text => setEmail(text)} />
             <AppButton title="Sign up" />
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