import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';

import PasswordIcon from '../../Icons/key.png';
import { eraseData } from '../../utils/persist';

import {hospitalLine} from '../../utils/requests';
import { FAILED_LOGIN_TO_HOSPITAL, HOSPITAL_PASSWORD } from '../../utils/strings';
import store from '../../reducers/store';
import { HOSPITALLINE } from '../../utils/endpoints';

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

class NurseHomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            loading: false,
            failed: false,
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

    handlePasswordChange = (password) => {
        this.setState({password});
    };

    handleEnterHospitalPress = async (props) => {
        const hospitalPassword = HOSPITAL_PASSWORD;
        //chamar a verificação do backend
        console.log('hospital password:', HOSPITAL_PASSWORD);
        if (this.state.password !== hospitalPassword){
            this.setState({failed: true});
        } else {
            this.setState({password: ""});
            this.props.navigation.navigate('HospitalLine');
        }
    }

    handleChangePasswordPress = async (props) => {
        //const response = await hospitalLine();
        //console.log('AQUI A RESPOSTA:\n', response.data);
        this.props.navigation.navigate('NurseChangePassword');
    }

    checkString = () => {
        if (this.state.password !== "" ){
            return false;
        } else {
            return true;
        }
    }

    
    render () {
        const {
            name,
        } = this.props;

        let content;

        if (this.state.loading) {

            content = (
                <View style={{flex: 4.25, justifyContent: 'center' }}> 
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            );

        } else if (this.state.failed) {

            content = (
                <View style={{flex: 2.5, alignItems: 'center', justifyContent: 'center', marginBottom: 50}}> 
                    <Text style={styles.failed_login_to_hospital}>
                        {FAILED_LOGIN_TO_HOSPITAL}
                    </Text>
                    <TouchableOpacity 
                        style={styles.signUpButton}
                        onPress={() => this.setState({failed: false})}
                        enabled={!this.state.loading}
                    >
                        <Text style={{fontSize: 20, color: '#fafafa', fontWeight:'bold'}}> TENTAR NOVAMENTE </Text>
                    </TouchableOpacity>
                </View> 
            );

        } else {
            content =(
                <View style={{ flex: 4 }}>
                    <View style={styles.midle}>
                        <TriTextInput placeholder={'Senha do Hospital'} icon={PasswordIcon} onChangeText={this.handlePasswordChange}/>
                        <Button disabled={this.checkString()} onPress={this.handleEnterHospitalPress} label={'ENTRAR'} width={'40%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>

                    <View style={styles.bottom}>
                        <Button onPress={this.handleChangePasswordPress} label={'ALTERAR MINHA SENHA'} width={'80%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>
                </View>
            );
        }
        
        return (
            <RootContainer>
                <View style={styles.SuperiorOption}>
                    <SuperiorOption props={this.props} logOff={this.handleLogOffPress}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={32} label={'BEM VINDA, ENFERMEIRA ' + name + '!'}/>
                        <Text style={{
                            marginTop: 20, color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}
                        >
                            Está trabalhando? Insira a senha de seu hospital.
                        </Text>
                    </View>

                    {content}
             
                </View>
            </RootContainer>
        );
    }
}

export default NurseHomeScreen;

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
    