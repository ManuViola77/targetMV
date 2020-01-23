import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, StyleSheet, ImageBackground} from 'react-native';
import { Header, InputForm, ButtonForm, Spacer } from '../components/common';

const LoginScreen = () => (
    <ImageBackground
        source = {require('../../assets/logoLogin.png')}
        style = { styles.image }
    >

        <Header 
            title = "TARGET MV"
        />

        <SafeAreaView style = { styles.safeArea }>  
            <Spacer />
            <Spacer />
            <Spacer />

            <InputForm 
                title = 'Email'
                secureTextEntry = { false }
            />

            <InputForm 
                title = 'Password'
                secureTextEntry = { true }
            />

            <ButtonForm 
                title = 'SIGN IN'
            />

            <View style = { styles.container } >   
                <TouchableOpacity>
                    <Text style = { styles.smallLink } >Forgot your password?</Text>
                </TouchableOpacity>

                <Spacer />
                <Spacer />

                <TouchableOpacity>
                    <Text  style = { styles.boldLink } >CONNECT WITH FACEBOOK</Text>
                </TouchableOpacity>

                <View  style = { styles.allLeftSpace } >
                    <View style = {styles.lineStyle} />
                    <TouchableOpacity style = { styles.link } >
                        <Text>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    image: {
        height: 260,
        flex: 1,

    },

    safeArea: {
        flex: 1,
    },

    container: {
        alignItems: 'center',
        flex: 1,
    },

    smallLink: {
        fontSize: 12    
    },

    boldLink: {
        fontWeight: 'bold'
    },

    allLeftSpace: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginBottom: 20,
        width: 121
    },

    link: {   
        marginBottom: 15,
        alignSelf: 'center'
    }
}); 

export default LoginScreen;