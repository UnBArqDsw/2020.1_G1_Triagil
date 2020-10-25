import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import UserIcon from '../Icons/user.png';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C3ECFA',
        marginHorizontal: 20,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
 
    },
    textInput: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',

    }
})

const TriTextInput = (props) => {
    const { style, ...othersProps } = props;

    return (
        <View style={styles.container}>
            <Image style={{height: 40, width: 40, marginHorizontal: 10}} source={UserIcon} />
            <TextInput style={[styles.textInput, style]} 
                {...othersProps} 
            />  
        </View>
    );
}

export default TriTextInput;