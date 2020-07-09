import React, { Component } from 'react'
import {
  Animated
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { pages } from './constants/Pages'
import Login from './containers/Login'
import Capture from './containers/Capture'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: pages.LOGIN,
      fadeValue: new Animated.Value(0)
    }
  }

  authenticated = () => {
    this.nav(pages.CAPTURE)
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
        backgroundColor: 'grey'
      }
    }

    let container
    switch (this.state.currentPage) {
      case pages.LOGIN:
        container = <Login loginError={this.state.loginError}
          authenticated={this.authenticated} />
        break
      case pages.CAPTURE:
        container = <Capture nav={this.nav} />
        break
    }

    return (
        <Animated.View style={styles.container}>
          <StatusBar style="light" />
          {container}
        </Animated.View>
    )
  }
}

export default App