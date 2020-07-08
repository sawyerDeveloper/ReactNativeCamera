import React, { Component } from 'react'
import {
  View,
  SafeAreaView
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
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
    this.nav(pages.LANDING_PAGE)
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
        <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 300,
            }}
          />
          <StatusBar style="light" />
          {container}
        </View>
      </SafeAreaView>
    )
  }
}
