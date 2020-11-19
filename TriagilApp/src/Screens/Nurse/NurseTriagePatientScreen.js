import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';
import ComplainCard from '../../components/ComplainCard';

import headacheIcon from '../../Icons/headache.png';
import soreThroatIcon from '../../Icons/sore-throat.png';
import diarrheaIcon from '../../Icons/vomiting.png';
import dizzyIcon from '../../Icons/dizzy.png';
import convulsionIcon from '../../Icons/faint.png';

import { eraseData } from '../../utils/persist';

const styles = StyleSheet.create({
    SuperiorOption: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        justifyContent:'center'
    },
    top: {
        flex: 0.5,
        alignItems: 'center',
    },
    midle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    }, 
    bottom: {
        flex: 2,
        alignItems:'center',
        justifyContent: 'center',
    },
    signUpButton: {
        marginTop: 20,
        padding: 15,
    },
    failed_login_to_hospital: {
        justifyContent: 'flex-start',
        width: '60%',
        //height: '25%',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderColor: '#FB0C0D',
        borderWidth: 2,
        //borderBottomWidth: StyleSheet.hairlineWidth,
        borderRadius: 20,
        padding: 10,
        marginBottom: '5%',
        fontSize: 18,
      },
    
})

class NurseTriageScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            loading: false,
            failed: false,
            checked: false,
        };

        
    };

    handleLogOffPress = async (props) => {
        //console.log('AQUI A STORE: ',store.getState());
        await this.props.resetSession();
        await eraseData();

        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });    

    };

    
    render () {
        const patient = this.props.route.params.patient;
        console.log('OLHA:',patient);
        return (    
            <RootContainer>
                <View style={styles.SuperiorOption}>
                    <SuperiorOption props={this.props} logOff={this.handleLogOffPress}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'QUEIXA DO PACIENTE'}/>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>

                        <ComplainCard icon={headacheIcon} label={'DOR DE CABEÇA'} />
                        <ComplainCard icon={soreThroatIcon} label={'DOR DE GARGANTA'} />
                        <ComplainCard icon={diarrheaIcon} label={'DIARREIA E VÔMITO'} />
                        <ComplainCard icon={dizzyIcon} label={'DESMAIO, TONTURA, VERTIGEM'} />
                        <ComplainCard icon={convulsionIcon} label={'CONVULSÃO'} />

                    </View>
             
                </View>
            </RootContainer>
        );
    }
}

export default NurseTriageScreen;