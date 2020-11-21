import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    complainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#C3ECFA',
        width: '90%',
        marginVertical: 10,
        borderRadius: 15,

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
        
    },
    text: {
        fontSize: 16,
        textAlign:'center',
        alignItems: 'center',
        padding: 15,
        width: '70%',
        borderRadius: 15,
    }
})

const ComplainCard = (props) => {
    const { icon, label, ...otherProps } = props;

    return (
            <TouchableOpacity style={styles.complainContainer} {...otherProps }>
                <Image style={{height: 40, width: 40}} source={icon} />
                
                <Text style={styles.text}>{label}</Text>

            </TouchableOpacity>
    );
}

export default ComplainCard;