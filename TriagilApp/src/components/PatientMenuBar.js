import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HospitalIcon from '../Icons/hospital.png';
import LogOutIcon from '../Icons/logout.png';
import UserWhiteIcon from '../Icons/userWhiteIcon.png';
import ListIcon from '../Icons/list.png';

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
        height: 50,
        width: 50,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fafafa',
        textAlign: 'center'
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
                        <Text style={styles.text}>HOSPITAL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBarButtons}>
                        <Image style={styles.menuBarIconImage} source={ListIcon} resizeMode='contain'/>
                        <Text style={styles.text}>FICHA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBarButtons}>
                        <Image style={styles.menuBarIconImage} source={UserWhiteIcon} resizeMode='contain'/>
                        <Text style={styles.text}>PERFIL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBarButtons}>
                        <Image style={styles.menuBarIconImage} source={LogOutIcon} resizeMode='contain'/>
                        <Text style={styles.text}>SAIR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );

    }
}

export default PatientMenuBar;