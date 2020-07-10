import React, { useRef } from 'react'
import { Animated, Image, View, Dimensions } from 'react-native'
import Button from '../Button'

const Preview = (props) => {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height
    const yAnim = useRef(new Animated.Value(windowHeight)).current
    const opacityAnim = useRef(new Animated.Value(0)).current

    const intro = () => {
        Animated.timing(yAnim, {
            toValue: windowHeight - 100,
            duration: 800,
            delay: 700,
            useNativeDriver: true
        }).start()
        Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const slideOut = (callback) => {
        Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
        Animated.timing(yAnim, {
            toValue: windowHeight,
            duration: 600,
            useNativeDriver: true
        }).start(callback)
    }

    const styles = {
        container: {
            flex: 1,
            width: windowWidth,
            height: windowHeight
        },
        buttonContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'absolute',
            transform: [{ translateY: yAnim }],
            flexDirection: 'row',
            width: windowWidth,
            height: 100,
            backgroundColor: 'rgba(216, 216, 216, .8)'
        },
        image: {
            opacity: opacityAnim,
            width: windowWidth,
            height: windowHeight
        }
    }
    
    intro()

    return (
        <View style={styles.container}>
            <Animated.Image style={styles.image} source={{ uri: props.tempImage }} />
            <Animated.View style={styles.buttonContainer}>
                <Button
                    title="Keep"
                    justifyContent="center"
                    textAlign="center"
                    color="green"
                    width="50%"
                    height={100}
                    onPress={() => slideOut(props.accept)} />
                <Button
                    title="Retry"
                    justifyContent="center"
                    textAlign="center"
                    color="red"
                    width="50%"
                    height={100}
                    onPress={() => slideOut(props.reject)} />
            </Animated.View>
        </View>
    )
}

export default Preview