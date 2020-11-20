import React from 'react';
import { StyleSheet, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';
import TriTextInput from '../../../components/TriTextInput';

import diarrheaIcon from '../../../Icons/vomiting.png';


import { eraseData } from '../../../utils/persist';

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

class DiarrheaTriageScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

            hasBloodedPuke: false,
            hasAbdominalPain: false,
            hasBlackPoop: false,
            hasDehydration: false,
            hasDistantPuke: false,
            hasRecentEvent: false,

            vomito_com_sangue_notes: "",
            alteracao_consciencia_diarrhea: 0,
            perfusao_periferica: 0,
            temperatura_diarrhhea: 0,
            fezes_enegrecidas_notes: "",
            pain_diarrhea: 0,
            desidratacao_notes: "",

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

    handleSendTriagePress = () => {
        //console.log('PROPS: ', { patient: this.props.route.params.patient});
        //this.props.navigation.navigate('TriagePatient', { patient: this.props.route.params.patient });    
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

    handleVomito_com_sangue_notesChange = (vomito_com_sangue_notes) => {
        this.setState({vomito_com_sangue_notes});
    };

    handleAlteracao_consciencia_diarrheaChange = (alteracao_consciencia_diarrhea) => {
        this.setState({alteracao_consciencia_diarrhea});
    };

    handlePerfusao_perifericaChange = (perfusao_periferica) => {
        this.setState({perfusao_periferica});
    };

    handleTemperatura_diarrhheaChange = (temperatura_diarrhhea) => {
        this.setState({temperatura_diarrhhea});
    };

    handleFezes_enegrecidas_notesChange = (fezes_enegrecidas_notes) => {
        this.setState({fezes_enegrecidas_notes});
    };

    handlePain_diarrheaChange = (pain_diarrhea) => {
        this.setState({pain_diarrhea});
    };

    handleDesidratacao_notesChange = (desidratacao_notes) => {
        this.setState({desidratacao_notes});
    };


    
    render () {
        return (    
            <RootContainer>
                
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'QUEIXA DO PACIENTE'}/>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>

                    <TriTextInput placeholder={'Queixa Principal'} icon={diarrheaIcon} onChangeText={this.handleChangeMainComplain}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={diarrheaIcon} onChangeText={this.handleDrugsChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={diarrheaIcon} onChangeText={this.handleAllergiesChange}/>
                        <TriTextInput placeholder={'Escala de dor'} icon={diarrheaIcon} onChangeText={this.handlePainRuleChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={diarrheaIcon} onChangeText={this.handleCovidChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={diarrheaIcon} onChangeText={this.handleFCChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={diarrheaIcon} onChangeText={this.handleFRChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={diarrheaIcon} onChangeText={this.handlePASChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={diarrheaIcon} onChangeText={this.handlePADChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={diarrheaIcon} onChangeText={this.handleSPOChange}/>
                        <TriTextInput placeholder={'Peso'} icon={diarrheaIcon} onChangeText={this.handleWeightChange}/>
                        
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Vômito com sangue'
                            iconRight
                            checked={this.state.hasBloodedPuke}
                            onPress={()=>this.setState({hasBloodedPuke: !this.state.hasBloodedPuke})}
                        />
                        <TriTextInput placeholder={'Obs Vômito\ncom sangue'} icon={diarrheaIcon} onChangeText={this.handleVomito_com_sangue_notesChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Dor Abdominal'
                            iconRight
                            checked={this.state.hasAbdominalPain}
                            onPress={()=>this.setState({hasAbdominalPain: !this.state.hasAbdominalPain})}
                        />
                        <TriTextInput placeholder={'Alteração Consciência\nEscala de Glasgow'} icon={diarrheaIcon} onChangeText={this.handleAlteracao_consciencia_diarrheaChange}/>
                        <TriTextInput placeholder={'Perfusão Periférica'} icon={diarrheaIcon} onChangeText={this.handlePerfusao_perifericaChange}/>
                        <TriTextInput placeholder={'Temperatura'} icon={diarrheaIcon} onChangeText={this.handleTemperatura_diarrhheaChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Fezes Enegrecidas/Geléia de groselha'
                            iconRight
                            checked={this.state.hasBlackPoop}
                            onPress={()=>this.setState({hasBlackPoop: !this.state.hasBlackPoop})}
                        />
                        <TriTextInput placeholder={'Obs Fezes Engegrecidas\nGeléia de groselha'} icon={diarrheaIcon} onChangeText={this.handleFezes_enegrecidas_notesChange}/>
                        <TriTextInput placeholder={'Dor 1-10'} icon={diarrheaIcon} onChangeText={this.handlePain_diarrheaChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Desidratação'
                            iconRight
                            checked={this.state.hasDehydration}
                            onPress={()=>this.setState({hasDehydration: !this.state.hasDehydration})}
                        />
                        <TriTextInput placeholder={'Obs Desidratação'} icon={diarrheaIcon} onChangeText={this.handleDesidratacao_notesChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Vômitos Esparços'}
                            iconRight
                            checked={this.state.hasDistantPuke}
                            onPress={()=>this.setState({hasDistantPuke: !this.state.hasDistantPuke})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Evento Recente'}
                            iconRight
                            checked={this.state.hasRecentEvent}
                            onPress={()=>this.setState({hasRecentEvent: !this.state.hasRecentEvent})}
                        />

                        <TriTextInput placeholder={'Discriminadores'} icon={diarrheaIcon} onChangeText={this.handleDiscriminatorsChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={diarrheaIcon} onChangeText={this.handleNurseObsChange}/>

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

export default DiarrheaTriageScreen;