import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { clr10, clr60 } from '../../const/Colour/color'

const CustomeButton = ({ onPress, text, type = "Primary", bgColor, fgColor,brdr }) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor?{backgroundColor:bgColor,borderWidth:1}:{}
        ]}>
            <Text style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor?{color:fgColor}:{},
            ]}>
                {text}
            </Text>
        </Pressable>
    )
}

export default CustomeButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
    },

    container_Primary: {
        backgroundColor: clr10,
    },
    container_Secondary:{
        backgroundColor:"#FFFFFF",
        borderWidth:1,
    },
    container_Tertiary: {
    },
    text: {
        color: clr60,
        fontWeight: 'bold',
        fontSize: 20,
    },
    text_Tertiary: {
        color: 'Grey',
    },
    text_Secondary: {
        color: 'Grey',
    },
})