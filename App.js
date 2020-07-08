import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import {
  View,
  SafeAreaView
} from 'react-native'
import Login from './containers/Login'
import { pages } from './constants/Pages'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: pages.LOGIN
    }
  }

  authenticated = () => {
    
  }

  nav = (newPage) => {
    this.setState({
      currentPage: newPage
    })
  }

  render() {
    const styles = {
      container: {
        flex: 1,
        backgroundColor: 'grey',
      }
    }

    let container
    switch (this.state.currentPage) {
      case pages.LOGIN:
        container = <Login loginError={this.state.loginError}
                            authenticated={this.authenticated} />
        break
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
        <View style={styles.container}>
          <StatusBar style="light" />
          {container}
        </View>
      </SafeAreaView>
    )
  }
}
