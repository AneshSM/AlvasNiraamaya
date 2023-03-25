import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'

import CustomeInput from '../../components/CustomeInput/CustomeInput';
import CustomeButton from '../../components/CustomeButton/CustomeButton';
import { clr30, clr60 } from '../../const/Colour/color';

import {useNavigation} from '@react-navigation/native'  

import { Controller,useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
    const { height } = useWindowDimensions();
    const { Code, setCode } = useState('')
    const { password, setPassword } = useState('')

    const navigation =useNavigation()


    const onSigInPressed = () => {
        console.warn('SignIn')
        navigation.navigate('SignIn')
    }

    const onSubmitPressed = () => {
        navigation.navigate('SignIn')
        console.warn('Password changed!')
    }

    const{
        control,
        handleSubmit,
        watch,
        formState:{errors}
    }=useForm();

    const pwd=watch('New Passsword');

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
            <View style={[styles.container, { padding: height * 0.04 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CustomeInput 
                    placeholder='Code' 
                    control={control}
                    name='Code'
                    rules={{
                        required:'Enter the code recieved',
                        minLength:'Code must be of minimum 4 characters long'
                    }}
                    /> 
                    <CustomeInput 
                    placeholder='New Password' 
                    name='New Passsword'
                    control={control}
                    rules={{
                        required:'Enter the new Password',
                        minLength: {
                            value: 8,
                            message: 'Password should be minimum 8 characters long'
                        },
                    }}
                    />
                    <CustomeInput 
                    placeholder='Confirm Password' 
                    name='Confirm Passsword'
                    control={control}
                    rules={{
                        required:'Re-Enter the new Password',
                        minLength: {
                            value: 8,
                            message: 'Password should be minimum 8 characters long'
                        },
                        validate:value=>value===pwd || 'Password does not match',
                    }}
                    />
                    <CustomeButton
                        text='Submit'
                        onPress={handleSubmit(onSubmitPressed)}
                    />
                    <CustomeButton
                        text="Back to Signin"
                        onPress={onSigInPressed} type="Tertiary"
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default NewPasswordScreen

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
    },
    title: {
        fontWeight: 'bold',
        fontSize: 34,
        margin: 10,
    },
    link: {
        color: clr30
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    }
})