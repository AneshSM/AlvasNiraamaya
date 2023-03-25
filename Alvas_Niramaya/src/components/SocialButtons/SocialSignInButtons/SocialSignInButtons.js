import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomeButton from '../../CustomeButton/CustomeButton'

const SocialSignInButtons = () => {
    
    const onSignInGoogle = () => {
        console.warn('Google')
    }
    const onSignInFaceBook = () => {
        console.warn('FaceBook')
    }
    const onSignInApple = () => {
        console.warn('Apple')
    }
    return (
        <>
            <CustomeButton
                text='Sign In with Google'
                onPress={onSignInGoogle}
                bgColor="#FFFFFF"
                fgColor="#757575"
            />
            <CustomeButton
                text='Sign In with FaceBook'
                onPress={onSignInFaceBook}
                bgColor="#1877F2"
                fgColor="#FFFFFF"
            />
            <CustomeButton
                text='Sign In with Apple'
                onPress={onSignInApple}
                bgColor="#000000"
                fgColor="#FFFFFF"
            />
        </>
    )
}

export default SocialSignInButtons

const styles = StyleSheet.create({})