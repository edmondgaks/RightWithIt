import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
    const [email, setEmail] = useState();
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
            <Formik 
                initialValues={{ email: '', password: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>
                {({ handleChange,handleSubmit, errors }) => (
                    <>
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
                            onChangeText={handleChange("email")} />
                        <Text style={{
                            color: "red",
                            alignSelf: "flex-start",
                            fontSize: 12,
                            marginLeft: 50,
                        }}>{errors.email}</Text>
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
                            onChangeText={handleChange("password")} />
                        <Text style={{
                            color: "red",
                            alignSelf: "flex-start",
                            fontSize: 12,
                            marginLeft: 50,
                        }}>{errors.password}</Text>
                        <AppButton title="Sign up" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
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