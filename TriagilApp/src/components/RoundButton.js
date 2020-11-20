import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import searchIcon from '../Icons/magnifier.png';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        //marginLeft: 50,
        padding: 25,
        backgroundColor: '#1BC47D',

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
});

const RoundButton = (props) => {
    const { onPress } = props;
  return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            <Image style={{width: 15, height: 15 }} source={searchIcon}  resizeMode='contain'/>
        </TouchableOpacity>
  );
}

export default RoundButton;
