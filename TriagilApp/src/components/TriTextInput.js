import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#C3ECFA',
        width: '80%',
        marginVertical: 10,
        borderRadius: 15,
        
    },
    textInput: {
        fontSize: 16,
        alignItems: 'center',
        padding: 15,
        width: '80%',
        borderRadius: 15,
    }
})

const TriTextInput = (props) => {
    const { style, icon, secureTextEntry, ...othersProps } = props;

    return (
            <View style={styles.inputContainer}>
                <Image style={{height: 40, width: 40, marginLeft: 5}} source={icon} />
                <TextInput style={[styles.textInput, style]} secureTextEntry={secureTextEntry}
                    {...othersProps} 
                />  
            </View>
    );
}

export default TriTextInput;