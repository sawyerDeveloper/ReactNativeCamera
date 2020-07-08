import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

const Button = (props) => {

    const styles = StyleSheet.create({
        container: {
            width: props.width,
            height: props.height,
            backgroundColor: props.backgroundColor,
            justifyContent: props.justifyContent,
            alignSelf: props.alignSelf,
            flexDirection: props.flexDirection,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
            marginTop: props.marginTop
        },
        titleText: {
            color: props.color,
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            fontFamily: props.fontFamily,
            textAlign: props.textAlign
        }
    })

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={styles.background}>
                    <Image source={props.source} />
                    <Text style={styles.titleText}>{props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Button