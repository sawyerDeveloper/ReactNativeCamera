import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import Button from '../components/Button'
import { pages } from '../constants/Pages'

const fakeCreds = {
    email: 'Test',
    password: 'test'
}

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false
        }
    }

    acceptEmail = (text) => {
        this.setState({
            email: text,
            emailError: false,
            passwordError: false
        })
    }

    acceptPassword = (text) => {
        this.setState({
            password: text,
            emailError: false,
            passwordError: false
        })
    }

    loginUser = () => {
        //  Fake/for fun
        
        if (this.state.email !== fakeCreds.email) {
            this.setState({
                emailError: true
            })
            return
        }

        if (this.state.password !== fakeCreds.password) {
            this.setState({
                passwordError: true
            })
            return
        }
        this.props.authenticated()
    }

    render() {
        const styles = {
            container: {
                flex: 1,
                flexDirection: 'column',
                height: '100%',
                width: '100%'
            },
            loginContainer: {
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center'
            },
            textInput: {
                backgroundColor: 'white',
                width: 350,
                height: 40,
                borderRadius: 2,
                textAlign: 'center',
                marginBottom: 5
            },
            textInputError: {
                borderColor: 'red',
                borderWidth: 1
            }
        }

        const emailPlaceholder = this.state.emailError ? "Bad Email" : "Email"
        const emailStyle = this.state.emailError ? [styles.textInputError, styles.textInput] : styles.textInput
        const passwordPlaceholder = this.state.passwordError ? "Bad Password" : "Password"
        const passwordStyle = this.state.passwordError ? [styles.textInputError, styles.textInput] : styles.textInput

        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding">
                <View style={styles.loginContainer}>
                    <TextInput onChangeText={this.acceptEmail}
                        placeholder={emailPlaceholder}
                        value={this.state.username}
                        style={emailStyle}
                        underlineColorAndroid="transparent" />
                    <TextInput onChangeText={this.acceptPassword}
                        placeholder={passwordPlaceholder}
                        value={this.state.password}
                        style={passwordStyle}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true} />
                    <Button
                        title="LOGIN"
                        justifyContent="center"
                        textAlign="center"
                        color="white"
                        backgroundColor="#4f8ff7"
                        borderRadius={2}
                        width={350}
                        height={40}
                        onPress={this.loginUser} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default Login