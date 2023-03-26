import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import logo from "../../assets/logo/logo.png"
import { useForm } from 'react-hook-form'
import { CustomeButton, CustomeInput, SocialSignInButtons } from '../../components'
import { clr60, SigninScreen_Style } from '../../const'

const SigninScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation()

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // console.log(errors); 

    const onSiginPressed = data => {
        console.log(data)
        //Validate User
        navigation.navigate('Home')
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password')
        navigation.navigate('ForgotPassword')
    }
    const onSignUpPressed = () => {
        console.warn('SignUp')
        navigation.navigate('SignUp')
    }



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <View style={[SigninScreen_Style.head]}>
                    <View style={[SigninScreen_Style.logo]}>
                        <Image source={logo} style={[styles.logo, SigninScreen_Style.image]} resizeMode='contain'></Image>
                    </View>
                    <View style={[SigninScreen_Style.title]}>
                        <Text style={[SigninScreen_Style.text, SigninScreen_Style.titleText1]}>Alva’s </Text>
                        <Text style={[SigninScreen_Style.text, SigninScreen_Style.titleText2]}>Niraamaya </Text>
                    </View>
                </View>
                <View style={[styles.container, { padding: height * 0.04 }]}>

                    <CustomeInput
                        placeholder='Username'
                        name='Username'
                        control={control}
                        rules={{ required: 'Username is required' }}
                    />
                    <CustomeInput
                        placeholder='Password'
                        name='Password'
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: { 
                                value: 8, 
                                message: 'Password should be minimum 8 characters long' },
                        }}
                        secureTextEntry
                    />

                    <CustomeButton
                        text='LogIn'
                        onPress={handleSubmit(onSiginPressed)}
                    />
                    <CustomeButton
                        text='Forgot Password ?'
                        onPress={onForgotPasswordPressed} type="Tertiary"

                    />
                    <SocialSignInButtons />
                    <CustomeButton
                        text="Don't have an account ? Create one"
                        onPress={onSignUpPressed} type="Tertiary"

                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: clr60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 50,
        marginTop: 20,
    },
})