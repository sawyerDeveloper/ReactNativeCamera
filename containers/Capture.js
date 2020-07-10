import React, { Component } from 'react'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { Animated, View, Dimensions, TouchableHighlight, Alert } from 'react-native'
import Preview from '../components/capture/Preview'

class Capture extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tempImage: null,
            permission: false,
            snapButtonSize: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Camera.requestPermissionsAsync()
            .then(() => {
                this.setState({
                    //  Obviously do better in production
                    permission: true
                })
            })
        Animated.timing(this.state.snapButtonSize, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    captureImage = () => {
        Animated.timing(this.state.snapButtonSize, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() =>{
            this.camera.takePictureAsync().then((data) => {
                this.setState({
                    tempImage: data.uri
                })
            })
        })
    }

    accept = () => {
        MediaLibrary.saveToLibraryAsync(this.state.tempImage)
            .then(() => {
                Alert.alert(
                    "Image Saved",
                    "Saved to Photos",
                    [
                        {
                            text: "OK", onPress: () => {
                                this.setState({
                                    tempImage: null
                                }, () => {
                                    Animated.timing(this.state.snapButtonSize, {
                                        toValue: 1,
                                        duration: 500,
                                        useNativeDriver: true
                                    }).start()
                                })
                            }
                        }
                    ],
                    { cancelable: false }
                )
            })

    }

    reject = () => {
        this.setState({
            tempImage: null
        }, () => {
            Animated.timing(this.state.snapButtonSize, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start()
        })
    }

    render() {

        const windowWidth = Dimensions.get('window').width
        const windowHeight = Dimensions.get('window').height
        const styles = {
            container: {
                flex: 1,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
            },
            camera: {
                width: windowWidth,
                height: windowHeight
            },
            snapButton: {
                width: 70,
                height: 70,
                transform: [{scale: this.state.snapButtonSize}],
                backgroundColor: 'rgba(255, 255, 255, .5)',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 35,
                bottom: 80,
                left: windowWidth / 2 - 35
            }
        }

        if (!this.state.permission) {
            return null
        }

        let component
        //  If a pic hasn't been taken - show the camera
        if (!this.state.tempImage) {
            component = <TouchableHighlight onPress={this.captureImage}>
                            <View>
                                <Camera ref={ref => { this.camera = ref }} type="back" style={styles.camera} />
                                <Animated.View style={styles.snapButton} />
                            </View>
                        </TouchableHighlight>

            //  Else show the image that has been taken
        } else {
            component = <Preview accept={this.accept} reject={this.reject} tempImage={this.state.tempImage} />
        }
        return (
            <View style={styles.container}>
                {component}
            </View>
        )
    }
}
export default Capture