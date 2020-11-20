import React from 'react';
import {StyleSheet, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';
import TriTextInput from '../../../components/TriTextInput';

import headacheIcon from '../../../Icons/headache.png';


import { eraseData } from '../../../utils/persist';
import { triagePatient } from '../../../utils/requests';
import store from '../../../reducers/store';

const styles = StyleSheet.create({
    SuperiorOption: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        justifyContent:'center'
    },
    top: {
        flex: 1.5,
        marginTop: 30,
        alignItems: 'center',
    },
    midle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    }, 
    bottom: {
        flex: 2,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
   
})

class HeadacheTriageScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainComplain: "",
            nurseNotes: "",
            drugs: "",
            discriminators: "",
            allergies: "",
            painRule: 0,
            covid19: 0,
            fc: 0.0,
            fr: 0.0,
            pas: 0.0,
            pad: 0.0,
            spo2: 0.0,
            weight: 0.0,


            hasAllergy: false,
            hasDisturbedMentalState: false, 
            hasShockSigns: false,
            hasConvulsion: false,
            hasFocalSigns: false,
            hasPainGrowth: false,
            hasGreatVisionLoss: false,
            hasVisionLoss: false,
            hasMenigism: false,
            hasUnconsciouness: false,
            hasDizzy: false,


            estado_mental_alterado_notes:"",
            sinaisdechoquenotes_headache: "",
            sinais_neurologicos_focais_notes_headache:"",
            aumento_subito_da_dornotes: "" ,
            menigismo_notes_headache: "",
            pain_headache: 0,
            temperature_headache: 0.0,
            inconsciencia_notes_headache: "",

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

    handleGoBack = () => {
        this.props.navigation.goBack();
    };

    handleSendTriagePress = async () => {
        let headacheInfo;
        let nurseId = store.getState();

        headacheInfo = {
            id_patient: this.props.route.params.patient.id_patient,
            id_nurse: nurseId.user.nurse.id,
            id_patient_record: this.props.route.params.patient.id,
            main_complain: this.state.mainComplain,
            nurse_notes: this.state.nurseNotes,
            drugs: this.state.drugs,
            discriminators: this.state.discriminators,
            has_alergies: this.state.hasAllergy,
            alergies: this.state.allergies,
            pain_rule: this.state.painRule,
            covid19: this.state.covid19,
            fc: this.state.fc,
            fr: this.state.fr,
            pas: this.state.pas,
            pad: this.state.pad,
            spo2: this.state.spo2,
            weight: this.state.weight,
            headache: true,
            estadomental_alterado: this.state.hasDisturbedMentalState,
            estado_mental_alterado_notes: this.state.estado_mental_alterado_notes,
            sinais_de_choque_headache: this.state.hasShockSigns,
            sinaisdechoquenotes_headache: this.state.sinaisdechoquenotes_headache,
            convulsion_headache: this.state.hasConvulsion,
            sinais_neurologicos_focais_headache: this.state.hasFocalSigns,
            sinais_neurologicos_focais_notes_headache: this.state.sinais_neurologicos_focais_notes_headache,
            aumento_subitodador: this.state.hasPainGrowth,
            aumento_subito_da_dornotes: this.state.aumento_subito_da_dornotes,
            perda_aguda_completa_visao: this.state.hasGreatVisionLoss,
            menigismo_headache: this.state.hasMenigism,
            menigismo_notes_headache: this.state.menigismo_notes_headache,
            pain_headache: this.state.pain_headache,
            temperature_headache: this.state.temperature_headache,
            inconsciencia_headache: this.state.hasUnconsciouness,
            inconsciencia_notes_headache: this.state.inconsciencia_notes_headache,
            diminuicao_visao: this.state.hasVisionLoss,
            nausea_e_vomito: this.state.hasDizzy,
        };

        //console.log('PROPS: ', { patient: this.props.route.params.patient});
        await this.props.headacheTriage(headacheInfo);
        
        let data;
        data = store.getState();
        console.log("DATA: ", this.props.route.params);
        const response = await triagePatient(data.triageRecord);







        this.props.headacheTriage(headacheInfo);









        this.props.headacheTriage(headacheInfo);









        this.props.navigation.navigate('TriageClassification');    
        
    };
    
    handleChangeMainComplain = (mainComplain) => {
        this.setState({mainComplain});
    };
    
    handleNurseObsChange = (nurseNotes) => {
        this.setState({nurseNotes});
    };
    
    handleDrugsChange = (drugs) => {
        this.setState({drugs});
    };

    handleDiscriminatorsChange = (discriminators) => {
        this.setState({discriminators});
    };
    
    handleAllergiesChange = (allergies) => {
        this.setState({allergies: allergies});
    };
    
    handlePainRuleChange = (painRule) => {
        this.setState({painRule});
    };
    
    handleCovidChange = (covid19) => {
        this.setState({covid19});
    };
    

    handleFCChange = (fc) => {
        this.setState({fc});
    };

    handleFRChange = (fr) => {
        this.setState({fr});
    };
    
    handlePASChange = (pas) => {
        this.setState({pas});
    };

    handlePADChange = (pad) => {
        this.setState({pad});
    };

    handleSPOChange = (spo2) => {
        this.setState({spo2});
    };
    
    handleWeightChange = (weight) => {
        this.setState({weight});
    };
    
    handleMentalStateChange = (estado_mental_alterado_notes) => {
        this.setState({estado_mental_alterado_notes});
    };

    handleShockChange = (sinaisdechoquenotes_headache) => {
        this.setState({sinaisdechoquenotes_headache});
    };

    handleFocalChange = (sinais_neurologicos_focais_notes_headache) => {
        this.setState({sinais_neurologicos_focais_notes_headache});
    };

    handlePainGrowthChange = (aumento_subito_da_dornotes) => {
        this.setState({aumento_subito_da_dornotes});
    };

    handleMenigismChange = (menigismo_notes_headache) => {
        this.setState({menigismo_notes_headache});
    };

    handlePainScaleChange = (pain_headache) => {
        this.setState({pain_headache});
    }

    handleTemperatureChange = (temperature_headache) => {
        this.setState({temperature_headache});
    };

    handleUnconsciounessChange = (inconsciencia_notes_headache) => {
        this.setState({inconsciencia_notes_headache});
    };



    render () {
        return (    
            <RootContainer>
                
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'QUEIXA DO PACIENTE'}/>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>

                        <TriTextInput placeholder={'Queixa Principal'} icon={headacheIcon} onChangeText={this.handleChangeMainComplain}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={headacheIcon} onChangeText={this.handleDrugsChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={headacheIcon} onChangeText={this.handleAllergiesChange}/>
                        <TriTextInput placeholder={'Escala de dor'} icon={headacheIcon} onChangeText={this.handlePainRuleChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={headacheIcon} onChangeText={this.handleCovidChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={headacheIcon} onChangeText={this.handleFCChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={headacheIcon} onChangeText={this.handleFRChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={headacheIcon} onChangeText={this.handlePASChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={headacheIcon} onChangeText={this.handlePADChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={headacheIcon} onChangeText={this.handleSPOChange}/>
                        <TriTextInput placeholder={'Peso'} icon={headacheIcon} onChangeText={this.handleWeightChange}/>
                       
                       <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Estado Mental Alterado'
                            iconRight
                            checked={this.state.hasDisturbedMentalState}
                            onPress={()=>this.setState({hasDisturbedMentalState: !this.state.hasDisturbedMentalState})}
                        />
                        <TriTextInput placeholder={'Obs Estado Mental'} icon={headacheIcon} onChangeText={this.handleMentalStateChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Sinais de Choque'
                            iconRight
                            checked={this.state.hasShockSigns}
                            onPress={()=>this.setState({hasShockSigns: !this.state.hasShockSigns})}
                        />
                        <TriTextInput placeholder={'Obs Sinais de Choque'} icon={headacheIcon} onChangeText={this.handleShockChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Convulsão'
                            iconRight
                            checked={this.state.hasConvulsion}
                            onPress={()=>this.setState({hasConvulsion: !this.state.hasConvulsion})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Sinais Neurológicos Focais'}
                            iconRight
                            checked={this.state.hasFocalSigns}
                            onPress={()=>this.setState({hasFocalSigns: !this.state.hasFocalSigns})}
                        />
                        <TriTextInput placeholder={'Obs Sinais Neurológicos\nFocais'} icon={headacheIcon} onChangeText={this.handleFocalChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Aumento súbito dor'
                            iconRight
                            checked={this.state.hasPainGrowth}
                            onPress={()=>this.setState({hasPainGrowth: !this.state.hasPainGrowth})}
                        />
                        <TriTextInput placeholder={'Obs Aumento Súbito dor'} icon={headacheIcon} onChangeText={this.handlePainGrowthChange}/>
                        <CheckBox
                        containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                        textStyle={{color:'#64757B'}}
                            center
                            title='Perda aguda/completa da visão'
                            iconRight
                            checked={this.state.hasGreatVisionLoss}
                            onPress={()=>this.setState({hasGreatVisionLoss: !this.state.hasGreatVisionLoss})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Diminuição da visão'
                            iconRight
                            checked={this.state.hasVisionLoss}
                            onPress={()=>this.setState({hasVisionLoss: !this.state.hasVisionLoss})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Menigismo'
                            iconRight
                            checked={this.state.hasMenigism}
                            onPress={()=>this.setState({hasMenigism: !this.state.hasMenigism})}
                        />
                        <TriTextInput placeholder={'Obs de Menigismo'} icon={headacheIcon} onChangeText={this.handleMenigismChange}/>
                        <TriTextInput placeholder={'Dor Escala 1-10'} icon={headacheIcon} onChangeText={this.handlePainScaleChange}/>
                        <TriTextInput placeholder={'Temperatura'} icon={headacheIcon} onChangeText={this.handleTemperatureChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Inconsciência'
                            iconRight
                            checked={this.state.hasUnconsciouness}
                            onPress={()=>this.setState({hasUnconsciouness: !this.state.hasUnconsciouness})}
                        />
                        <TriTextInput placeholder={'Obs Inconsciência'} icon={headacheIcon} onChangeText={this.handleUnconsciounessChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Nausea ou Vômito'
                            iconRight
                            checked={this.state.hasDizzy}
                            onPress={()=>this.setState({hasDizzy: !this.state.hasDizzy})}
                        />

                        <TriTextInput placeholder={'Discriminadores'} icon={headacheIcon} onChangeText={this.handleDiscriminatorsChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={headacheIcon} onChangeText={this.handleNurseObsChange}/>

                    </View>

                    <View style={styles.bottom}>
                        <Button onPress={this.handleGoBack}label={'VOLTAR'} width={'35%'} labelColor={'#FAFAFA'} color={'#FB0C0D'} />
                        <Button onPress={this.handleSendTriagePress}label={'ENVIAR TRIAGEM'} width={'55%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>
             
                </View>
            </RootContainer>
        );
    }
}

export default HeadacheTriageScreen;