import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C3ECFA',
        marginHorizontal: 20,
        borderRadius: 15,
        justifyContent: 'center',
        //height: 50,
    },
    textInput: {
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
    }
})

const TriTextInput = (props) => {
    const { style, ...othersProps } = props;

    return (
        <View style={styles.container}>
            <Image style={} source={}/>
            <TextInput style={[styles.textInput, style]} 
                {...othersProps} 
            />  
        </View>
    );
}

export default TriTextInput;