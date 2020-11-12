import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HospitalIcon from '../Icons/hospital.png';
import LogOutIcon from '../Icons/logout.png';
import UserWhiteIcon from '../Icons/userWhiteIcon.png';
import ListIcon from '../Icons/list.png';

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
    container: {
        flex: 1,
        justifyContent:'flex-end',
        marginBottom: 20,
    },
    menuBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    menuBarButtons: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#21B6F2',
        borderRadius: 15,
        marginHorizontal: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    menuBarIconImage: {
        height: 45,
        width: 45,
    },
  });



class PatientMenuBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {} =this.props;
        
        return (
            <View style={styles.container}>
                <View style={styles.menuBar}>
                    <TouchableOpacity style={styles.menuBarButtons}>
                        <Image style={styles.menuBarIconImage} source={HospitalIcon} resizeMode='contain'/>
                        <StyledText >HOSPITAL</StyledText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBarButtons}>
                        <Image style={styles.menuBarIconImage} source={ListIcon} resizeMode='contain'/>
                        <StyledText >FICHA</StyledText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBarButtons}>
                        <Image style={styles.menuBarIconImage} source={UserWhiteIcon} resizeMode='contain'/>
                        <StyledText >PERFIL</StyledText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBarButtons}>
                        <Image style={styles.menuBarIconImage} source={LogOutIcon} resizeMode='contain'/>
                        <StyledText >SAIR</StyledText>
                    </TouchableOpacity>
                </View>
            </View>

        );

    }
}

export default PatientMenuBar;