import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
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
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image source={props.source} />
                    <Text style={styles.titleText}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Button