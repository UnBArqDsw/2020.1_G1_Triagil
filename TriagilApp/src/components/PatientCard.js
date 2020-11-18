import React from 'react';
import { Image, StyleSheet,Text,  TouchableOpacity, View } from 'react-native';

import userIcon from '../Icons/user.png';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        width: '100%',
        marginVertical: 4,
        padding: 10,

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    leftSide: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    patientInfo: {
        flex: 3,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    textInfo: {
        fontSize: 18, 
        fontWeight: 'bold',
    },
    rightSide: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
      },
    password:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  
  
  });
const PatientCard = (props) => {
    const { onPress, name, age, gender, queuePosition, ...otherProps} = props;
 
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.leftSide}>
                <Image style={{height: 60, width: 60, }} source={userIcon} />
            </View>

            <View style={styles.patientInfo}>
                <Text style={styles.textInfo}>{name}</Text>   
                <Text style={styles.textInfo}>Idade: {age} ANOS</Text>
                <Text style={styles.textInfo}>Sexo: {gender}</Text>
            </View>
            <View style={styles.rightSide}>
                <Text style={styles.password}>#PC{queuePosition}</Text>
            </View>
        </TouchableOpacity>

    );
}

export default PatientCard;