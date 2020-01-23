import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';


const Header = ({title}) => (
    <Text style = { styles.title } > {title} </Text>
);

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 100,
        //fontFamily: 'Open Sans'
    }
});

export { Header } ;

