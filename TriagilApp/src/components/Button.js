import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#1BC47D',

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    }, text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const Button = (props) => {
    const { label, onPress, color, labelColor, width , ...otherProps } = props;
  return (
        <TouchableOpacity {...otherProps} style={[styles.container, {backgroundColor: color, width: width}]} onPress={onPress}>
            <Text style={[{color: labelColor}, styles.text ]}>{label}</Text>
        </TouchableOpacity>
  );
}

export default Button;
