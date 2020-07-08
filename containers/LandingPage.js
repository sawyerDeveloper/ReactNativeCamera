import React from 'react'
import {
  View
} from 'react-native'
import Button from '../components/Button'
import { pages } from '../constants/Pages'

const cameraImage = require('../assets/camera.png')

const LandingPage = (props) => {

  const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%',
    }
  }

  return (
    <View style={styles.container}>

      <Button
        title="TAKE PICTURE"
        textAlign="center"
        source={cameraImage}
        justifyContent='flex-end'
        marginTop={15}
        color="white"
        fontSize={20}
        width={200}
        height={200}
        marginTop={200}

        onPress={() => props.nav(pages.CAPTURE)}
      />
      <Button
        title="SIGN OUT"
        textAlign="center"
        justifyContent="center"
        color="white"
        fontSize={18}
        width={130}
        height={450}

        onPress={() => props.nav(pages.LOGIN)}
      />
    </View>
  )
}
export default LandingPage