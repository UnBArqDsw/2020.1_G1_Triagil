import React from 'react';
import axios from 'axios';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import PatientMenuBar from '../../components/PatientMenuBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    top: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent:'center',
    },
    midle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
    }, 
    bottom: {
        flex: 0.5,
    },
})

class PatientHomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

    };

  
    render () {

        return (
            <RootContainer>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'BEM VINDO, CIDADÃO NOME!'}/>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Esperamos que esteja bem!</Text>
                    </View>
                    <View style={styles.midle}>
                        <Button label={'ALTERAR NOME'} width={'50%'} labelColor={'#fafafa'} color={'#1BC47D'} /> 

                        <Button label={'ALTERAR EMAIL'} width={'50%'} labelColor={'#fafafa'} color={'#1BC47D'} />

                        <Button label={'ALTERAR SENHA'} width={'50%'} labelColor={'#fafafa'} color={'#1BC47D'} />

                        <Button label={'EXCLUIR CONTA'} width={'50%'} labelColor={'#fafafa'} color={'#1BC47D'} />
                    </View>
                    
                    <View style={styles.bottom}>
                        <PatientMenuBar/>

                    </View>

                </View>
            </RootContainer>
        );
    }
}

export default PatientHomeScreen;

