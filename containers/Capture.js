import React, { Component } from 'react'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Button from '../components/Button'

class Capture extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tempImage: null,
            permission: false
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
    }

    captureImage = () => {
        this.camera.takePictureAsync().then((data) => {
            this.setState({
                tempImage: data.uri
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
        })
    }


    render() {

        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
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
            buttonContainer: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'absolute',
                bottom: 30,
                flexDirection: 'row',
                width: windowWidth,
                height: 75,
            },
            image: {
                width: windowWidth,
                height: windowHeight
            }
        }

        if (!this.state.permission) {
            return null
        }


        let component
        if (!this.state.tempImage) {
            component = <TouchableOpacity onPress={this.captureImage}>
                <Camera ref={ref => {
                    this.camera = ref
                }} type="back" style={styles.camera} >

                </Camera>

            </TouchableOpacity>
        } else {
            component = <View>

                <Image style={styles.image} source={{ uri: this.state.tempImage }} />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Keep"
                        justifyContent="center"
                        textAlign="center"
                        color="green"
                        backgroundColor='rgba(180, 180, 180, .8)'
                        width="50%"
                        height={40}
                        onPress={this.accept} />
                    <Button
                        title="Retry"
                        justifyContent="center"
                        textAlign="center"
                        color="red"
                        width="50%"
                        backgroundColor='rgba(180, 180, 180, .8)'
                        height={40}
                        onPress={this.reject} />
                </View>
            </View>
        }
        return (
            <View style={styles.container}>
                {component}
            </View>
        )
    }


}
export default Capture