import { stubFalse } from 'lodash';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#1BC47D',
        padding: 10, 
    }, text: {
        color: '#FFFFFF',
        fontSize: 34,
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