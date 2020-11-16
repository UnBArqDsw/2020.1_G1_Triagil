import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import LogOutIcon from '../Icons/logout.png';
import whiteLogo from '../Images/logoTriagilRedWhite.png';

import styled from 'styled-components/native';

const StyledText = styled.Text`
    color: #FFFFFF;
    text-shadow: 1px 2px 2px #DC1A23;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`;


const styles = StyleSheet.create({
    menuBarButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    menuBarIconImage: {
        height: 25,
        width: 45,
    },
  });

const superiorOption = (props) => {
    const {logOff} = props;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image style={{width:'40%', height:45, marginLeft: 10}} source={whiteLogo} resizeMode='contain'/>
        <TouchableOpacity style={styles.menuBarButtons} onPress={logOff}>
            <Image style={styles.menuBarIconImage} source={LogOutIcon} resizeMode='contain'/>
            <StyledText>SAIR</StyledText>
        </TouchableOpacity>
    </View>

  );
}

export default superiorOption ;