import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import Logo from './Logo';
import Button from './Button';
import MinorButton from './MinorButton';
import TriTextInput from './TriTextInput';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Background = () => {
    return ( 
        <LinearGradient style={styles.container} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']}> 
            <Logo/>
            <TriTextInput placeholder={' Email '} />
            <TriTextInput placeholder={' Senha '} />
            <Button label={'LOGIN'}/>
            <MinorButton label={'Cadastrar'} />
        </LinearGradient>          
    );
}

export default Background;