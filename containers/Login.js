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

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loginError: ''
        }
    }

    acceptEmail = (text) => {
        this.setState({
            email: text,
            loginError: ''
        })
    }

    acceptPassword = (text) => {
        this.setState({
            password: text,
            loginError: ''
        })
    }

    loginUser = () => {

        //  Fake/for fun
        if(this.state.email !== fakeCreds.email){
            this.setState({
                loginError: 'Bad Email'
            })
            return
        }
        if(this.state.password !== fakeCreds.password){
            this.setState({
                loginError: 'Bad Password'
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
            error: {
                color: 'red',
                fontWeight: 'bold'
            }
        }

        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding">
                <View style={styles.loginContainer}>
                    <TextInput onChangeText={this.acceptEmail}
                        placeholder="Email"
                        value={this.state.username}
                        style={styles.textInput}
                        underlineColorAndroid="transparent" />
                    <TextInput onChangeText={this.acceptPassword}
                        placeholder="Password"
                        value={this.state.password}
                        style={styles.textInput}
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
                        onPress={this.loginUser}/>
                        <Text style={styles.error}>{this.state.loginError} </Text>
                </View>
            </KeyboardAvoidingView>
        )
    }
}