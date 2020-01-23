import React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';

const InputForm = ({title, secureTextEntry}) => (
    <View style = { styles.container }> 
        <Text style = { styles.title } > {title} </Text>

        { secureTextEntry ? 
            <TextInput 
                secureTextEntry
                style = { styles.input }
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder = {title}
            />   
            :
            <TextInput 
                style = { styles.input }
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder = {title}
            />      
        }    
    </View>
);

const styles = StyleSheet.create({
    container: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        textTransform: 'uppercase',
        margin: 5
    },

    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        width: 200,
        padding: 5,
        textAlign: 'center',
        fontSize: 16
    }
});
    
export { InputForm };