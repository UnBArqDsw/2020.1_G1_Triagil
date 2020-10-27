import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        backgroundColor: '#FB0C0D',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    }, text: {
        color: '#FFFFFF',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const Button = (props) => {
    const { label, onPress} = props;
  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
  );
}

export default Button;
