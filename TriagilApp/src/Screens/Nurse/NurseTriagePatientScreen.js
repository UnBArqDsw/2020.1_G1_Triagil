import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';

import { eraseData } from '../../utils/persist';

import headacheIcon from '../../Icons/headache.png';

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

                        <CheckBox 
                            uncheckedIcon={
                                <Image style={{height: 45, width: 45 }} resizeMode='contain' source={headacheIcon} />
                            }
                            uncheckedColor={'#64757B'}
                            containerStyle={{backgroundColor: '#C3ECFA'}}
                            textStyle={{color: '#64757B'}}
                            center 
                            size={40} 
                            title='DOR DE CABEÇA' 
                            checked={this.state.checked}
                        />
                        <CheckBox 
                            uncheckedIcon={
                                <Image style={{height: 45, width: 45 }} resizeMode='contain' source={headacheIcon} />
                            }
                            uncheckedColor={'#64757B'}
                            containerStyle={{backgroundColor: '#C3ECFA'}}
                            textStyle={{color: '#64757B'}}
                            center 
                            size={40} 
                            title='DOR DE CABEÇA' 
                            checked={this.state.checked}
                        />
                             
                             <CheckBox 
                            uncheckedIcon={
                                <Image style={{height: 45, width: 45 }} resizeMode='contain' source={headacheIcon} />
                            }
                            uncheckedColor={'#64757B'}
                            containerStyle={{backgroundColor: '#C3ECFA'}}
                            textStyle={{color: '#64757B'}}
                            center 
                            size={40} 
                            title='DOR DE CABEÇA' 
                            checked={this.state.checked}
                        />
                            
                            <CheckBox 
                            uncheckedIcon={
                                <Image style={{height: 45, width: 45 }} resizeMode='contain' source={headacheIcon} />
                            }
                            uncheckedColor={'#64757B'}
                            containerStyle={{backgroundColor: '#C3ECFA'}}
                            textStyle={{color: '#64757B'}}
                            center 
                            size={40} 
                            title='DOR DE CABEÇA' 
                            checked={this.state.checked}
                        />
                            
                            <CheckBox 
                            uncheckedIcon={
                                <Image style={{height: 45, width: 45 }} resizeMode='contain' source={headacheIcon} />
                            }
                            uncheckedColor={'#64757B'}
                            containerStyle={{backgroundColor: '#C3ECFA'}}
                            textStyle={{color: '#64757B'}}
                            center 
                            size={40} 
                            title='DOR DE CABEÇA' 
                            checked={this.state.checked}
                        />
                            

                    </View>
             
                </View>
            </RootContainer>
        );
    }
}

export default NurseTriageScreen;

/*

triageRecord: {
    manchesterPriority: 1-5, [1 - azul, 2 - verde, 3 - amarelo, 4 - laranja, 5 - vermelho]
    mainComplaint: "",
    nurseNotes: "",
    drugs: "",
    discriminators: "",
    hasAlergies: false,
    alergies: "",
    readVitalSigns: {
        painRule: 1,
        covid19: 0, [0 - nao, 1 - sim]
        FC: 10.00, [frequencia cardiaca (fc) bpm]
        FR: 17.00, [Frequencia respiratória (FR)]
        PressãoArterialSistolica: 115.00, [PressãoArterialSistolica ML DE HG]
        pressãoArterialDiastolica: 78.00, [PressãoArterialDiastolica ml de hg]
        SPO2:98.00%, [SaturaçãoPeriféricaO2 PERCENTUAL]
        Temperatura: 37.90, [Temp 37.9 celsius]
    }
    patient: id_patient,
    patientRecord: id_patientRecord,
    nurse: id_nurse,
    weight: 17.00,
    
    headache: false
    headacheSigns: {
        estadoMentalAlterado: false,
        estadoMentalAlteradoNotes: "",
        sinaisDeChoque: false,
        sinaisDeChoqueNotes: "",
        convulsion: false,
        sinaisNeurologicosFocais: false,
        sinaisNeurologicosFocaisNotes: "",
        aumentoSubitoDaDor: false
        aumentoSubitoDaDorNotes: "",

        perdaAgudaCompletaVisao: false,
        menigismo: false,
        menigismoNotes: "",
        pain: 8, [1-10]
        temperature: 37.5,
        inconsciencia: false,
        inconscienciaNotes: "",
        diminuicaoVisao: false,
        nauseaEVomito: false,
        
    },
    soreThroat: false,
    soreThroatSigns: {
        comprometimentoViasAereas: false,
        comprometimentoViasAereasNotes: "",
        pain: 8, [1-10]
        estridorLaringeo: false,
        estridorLaringeoNotes: "",
        viagemRecente: false,
        temperatura: 37.5,
        dificuldadeDeglutir: false,
        ardenciaGarganta: false,
    },
    convulsion: false,
    convulsionSigns: {
        convulsaoAtiva: false,
        comprometimentoViasAereas: false,
        comprometimentoViasAereasNotes: "",
        alteracoesGlicemicas: false,
        alteracoesGlicemicasNumber: 100,
        respiracaoInadequada: false,
        respiracaoInadequadaNotes: "",
        sinaisNeurologicosFocais: false,
        sinaisNeurologicosFocaisNotes: "",
        criseConvulsivaReentrante: false,
        menigismo: false,
        menigismoNotes: "",
        overdoseEnvenenamento: false,
        overdoseEnvenenamentoNotes: "",
        traumaCranianoRecente: false,
        traumaCranianoRecenteNotes: "",
        posComicial: false,
        posComicialNotes:"",
        epilepsiaTratada: false,
        epilepsiaTratadaNotes: "",
        criseConvulsivaRecente: false,
        criseConvulsivaRecenteNotes: "",
    },
    fainting: false,
    faintingSigns: {
        alteracaoConsciencia:5,
        comprometimentoViasAereas: false,
        comprometimentoViasAereasNotes: "",
        alteracoesGlicemicas: false,
        alteracoesGlicemicasNumber: 100,
        rigidez: false,
        rigidezNotes: "",
        sinaisDeChoque: false,
        sinaisDeChoqueNotes: "",
        
        pulsoAnormal: false,
        dorToracica: false,
        dorToracicaNotes: false,
        disturbioSubitoEquilibrio: false,
        disturbioSubitoEquilibrioNotes: "",
        pain: 8,
        posComicial: false,
        posComicialNotes:"",
        dispneiaAguda: false,
        temperature: 35.5,
        relatoAlergia: false,
        relatoAlergiaNotes: "",
        cefaleia: 5,
        deficitNeurologico: false,
        traumaCranianoRecente: false,
        traumaCranianoRecenteNotes: "",
        inconsciencia: false,
        primeiraConvulsao: false,
        criseConvulsivaRecente: false,
        criseConvulsivaRecenteNotes: "",
        parestesia: false,
        parestesiaNotes: "",
    
    },
    diarrhea: false,
    diarrheaSigns:{
        vomitoComSangue: false,
        vomitoComSangueNotes: "",
        dorAbdominal: false,
        alteracaoConsciencia:5,
        perfusaoPeriferica: 5,
        temperatura: 35.5,
        fezesEnegrecidas: false,
        fezesEnegrecidasNotes: "",
        pain: 4,
        desidratacao: false,
        desidratacaoNotes:"",
        vomitosEsparsos: false,
        eventoRecente: false,
    }
}




*/
    