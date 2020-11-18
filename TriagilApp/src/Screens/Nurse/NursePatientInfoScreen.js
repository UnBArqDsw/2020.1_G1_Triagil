import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

import { eraseData } from '../../utils/persist';

import Button from '../../components/Button';
import Title from '../../components/Title';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';

import PasswordIcon from '../../Icons/key.png';
import userIcon from '../../Icons/user.png';
import cpfIcon from '../../Icons/CPF.png';
import genderIcon from '../../Icons/gender.png';
import calendarIcon from '../../Icons/calendar.png';



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
        justifyContent: 'center'
    },
    midle: {
        flex: 2,
    },
    patientName: {
        borderColor: '#1BC47D',
        borderWidth: 4,
        borderBottomWidth: 0,
        borderRadius: 2,
        marginLeft: 10,
        width: '80%',
        
    },
    bottom: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
    },
    signUpButton: {
        marginTop: 20,
        padding: 15,
    }
    
})

class NursePatientInfoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        
    };

    handleGoBack = () => {
        this.props.navigation.goBack();
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
        //console.log('AQUI OS PARAMETROS: ', this.props.route.params);
        
        return (
            <LinearGradient style={{flex: 1,flexGrow: 1, justifyContent: 'center'}} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']}>

                <View style={styles.container}>
                    <View style={styles.SuperiorOption}>
                        <SuperiorOption logOff={this.handleLogOffPress}/>
                    </View>
                    
                    <View style={styles.top}>
                        <Title fontsize={32} label={'FICHA DO PACIENTE!'}/>
                    </View>
                    
                    <View style={styles.midle}>
                        <View style={styles.patientName}>
                            <Text style={{fontSize: 26, marginLeft: 10, color:'#FAFAFA'}}>Paciente: {patient.name}</Text>
                        </View>
                        <ScrollView style={{ borderTopColor: '#1BC47D', borderTopWidth: 5}}
                            contentContainerStyle={{ alignItems: 'center'}}
                        >
                            <TriTextInput editable={false} placeholder={'Nome do Pai: ' + patient.father_name} icon={userIcon}/>
                            <TriTextInput editable={false} placeholder={'Nome do Mãe: ' + patient.mother_name} icon={userIcon}/>
                            <TriTextInput editable={false} placeholder={'CPF: ' + patient.cpf} icon={cpfIcon}/>
                            <TriTextInput editable={false} placeholder={'RG: ' + patient.rg} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'IDADE: ' + patient.age + ' ANOS'} icon={calendarIcon}/>
                            <TriTextInput editable={false} placeholder={'Nascimento: ' + patient.birth} icon={calendarIcon}/>
                            <TriTextInput editable={false} placeholder={'Tipo Sanguíneo: ' + patient.blood_type} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Sexo: ' + patient.sex} icon={genderIcon}/>
                            <TriTextInput editable={false} placeholder={'Religião: ' + patient.religions} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Raça: ' + patient.race} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Estado Civil: ' + patient.state_civil} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Nacionalidade: ' + patient.nationality} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Naturalidade: ' + patient.naturalness} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Escolaridade: ' + patient.schooling} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Profissão: ' + patient.professions} icon={PasswordIcon}/>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.bottom}>
                        <Button onPress={this.handleGoBack}label={'VOLTAR'} width={'35%'} labelColor={'#FAFAFA'} color={'#FB0C0D'} />
                        <Button label={'INICIAR TRIAGEM'} width={'55%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>
            
                </View>
            </LinearGradient>
        );
    }
}

export default NursePatientInfoScreen;
