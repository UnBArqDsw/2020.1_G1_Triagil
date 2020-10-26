import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const Background = () => {
    return ( 
        <LinearGradient style={styles.container} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']} />           
    );
}

export default Background;