import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

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
                {() => (
                    <>
                        <Text style={{
                            alignSelf: "flex-start",
                            fontSize: 15,
                            marginLeft: 50,
                            color: "#8E8C8C",
                        }}>Email</Text>
                        <AppFormField 
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon="email"
                            name="email"
                            keyboardType='email-address'
                            placeholder='Email'
                            textContentType='emailAddress'
                        />                        
                        <Text style={{
                            alignSelf: "flex-start",
                            fontSize: 15,
                            marginLeft: 50,
                            color: "#8E8C8C",
                        }}>Password</Text>
                        <AppFormField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            secureTextEntry
                            placeholder='Password'
                            textContentType='password'
                        />
                        <Text style={{
                            alignSelf: "flex-start",
                            fontSize: 15,
                            marginLeft: 50,
                            color: "#8E8C8C",
                        }}>Phone Number</Text>
                        <AppFormField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon="lock"
                            name="number"
                            secureTextEntry
                            placeholder='Phone Number'
                            textContentType='telephoneNumber'
                        />
                        <Text style={{
                            alignSelf: "flex-start",
                            fontSize: 15,
                            marginLeft: 50,
                            color: "#8E8C8C",
                        }}>Confirm Password</Text>
                        <AppFormField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            secureTextEntry
                            placeholder='Confirm Password'
                            textContentType='password'
                        />                       
                        <SubmitButton title="Sign up" />
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