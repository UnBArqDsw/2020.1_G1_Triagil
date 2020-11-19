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
import rgIcon from '../../Icons/rg.png';
import bloodIcon from '../../Icons/blood-type.png';
import religionIcon from '../../Icons/pray.png';
import civilStateIcon from '../../Icons/marital_status.png';
import nationalityIcon from '../../Icons/naturalization.png';
import naturalityIcon from '../../Icons/flag.png';
import schoolingIcon from '../../Icons/school.png';
import professionsIcon from '../../Icons/suitcase.png';


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
        this.props.navigation.navigate('HospitalLine');
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

    handleTriagePress = () => {
        //console.log('PROPS: ', { patient: this.props.route.params.patient});
        this.props.navigation.navigate('TriagePatient', { patient: this.props.route.params.patient });    
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
                            <TriTextInput editable={false} placeholder={'RG: ' + patient.rg} icon={rgIcon}/>
                            <TriTextInput editable={false} placeholder={'IDADE: ' + patient.age + ' ANOS'} icon={calendarIcon}/>
                            <TriTextInput editable={false} placeholder={'Nascimento: ' + patient.birth} icon={calendarIcon}/>
                            <TriTextInput editable={false} placeholder={'Tipo Sanguíneo: ' + patient.blood_type} icon={bloodIcon}/>
                            <TriTextInput editable={false} placeholder={'Sexo: ' + patient.sex} icon={genderIcon}/>
                            <TriTextInput editable={false} placeholder={'Religião: ' + patient.religions} icon={religionIcon}/>
                            <TriTextInput editable={false} placeholder={'Raça: ' + patient.race} icon={userIcon}/>
                            <TriTextInput editable={false} placeholder={'Estado Civil: ' + patient.state_civil} icon={civilStateIcon}/>
                            <TriTextInput editable={false} placeholder={'Nacionalidade: ' + patient.nationality} icon={nationalityIcon}/>
                            <TriTextInput editable={false} placeholder={'Naturalidade: ' + patient.naturalness} icon={naturalityIcon}/>
                            <TriTextInput editable={false} placeholder={'Escolaridade: ' + patient.schooling} icon={schoolingIcon}/>
                            <TriTextInput editable={false} placeholder={'Profissão: ' + patient.professions} icon={professionsIcon}/>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.bottom}>
                        <Button onPress={this.handleGoBack}label={'VOLTAR'} width={'35%'} labelColor={'#FAFAFA'} color={'#FB0C0D'} />
                        <Button onPress={this.handleTriagePress}label={'INICIAR TRIAGEM'} width={'55%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>
            
                </View>
            </LinearGradient>
        );
    }
}

export default NursePatientInfoScreen;
