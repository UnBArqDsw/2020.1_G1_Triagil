import React from 'react';
import { StyleSheet, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';
import TriTextInput from '../../../components/TriTextInput';

import convulsionIcon from '../../../Icons/faint.png';


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

class ConvulsionTriageScreen extends React.Component {
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


            
            hasAllergy: false,
            hasActiveConvulsion: false,
            hasAerialObstruction: false,
            hasGlicemicAlteration: false,
            hasDisturbedBreathing: false,
            hasFocalSigns: false,
            hasRepeatedConvulsion: false, 
            hasMenigism: false,
            hasOverdose: false,
            hasRecentTrauma: false,
            hasPosComicial: false,
            hasTreatedEpilepsy: false,
            hasRecentConvulsion: false,


          comprometimento_vias_aereas_notes_convulsion: "",
          alteracoes_glicemicas_number_convulsion:0,
          respiracao_inadequada_notes: "",
          sinais_neurologicos_focais_notes_convulsion: "",
          menigismo_notes_convulsion:"",
          overdose_envenenamento_notes: "",
          trauma_craniano_recente_notes_convulsion: "",
          pos_comicial_notes_convulsion: "",
          epilepsia_tratada_notes: "",
          crise_convulsiva_recente_notes_convulsion: ""


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
    ////////////////////////////////////////////////

    handleComprometimento_vias_aereas_notes_convulsionChange = (comprometimento_vias_aereas_notes_convulsion) => {
        this.setState({comprometimento_vias_aereas_notes_convulsion });
    };

    handleAlteracoes_glicemicas_number_convulsionChange = (alteracoes_glicemicas_number_convulsion) => {
        this.setState({alteracoes_glicemicas_number_convulsion});
    };

    handleRespiracao_inadequada_notesChange = (respiracao_inadequada_notes) => {
        this.setState({respiracao_inadequada_notes});
    };

    handleSinais_neurologicos_focais_notes_convulsionChange = (sinais_neurologicos_focais_notes_convulsion) => {
        this.setState({sinais_neurologicos_focais_notes_convulsion});
    };

    handleMenigismo_notes_convulsionChange = (menigismo_notes_convulsion) => {
        this.setState({menigismo_notes_convulsion});
    };

    handleOverdose_envenenamento_notesChange = (overdose_envenenamento_notes) => {
        this.setState({overdose_envenenamento_notes});
    };

    handleTrauma_craniano_recente_notes_convulsionChange = (trauma_craniano_recente_notes_convulsion) => {
        this.setState({trauma_craniano_recente_notes_convulsion});
    };

    handlePos_comicial_notes_convulsionChange = (pos_comicial_notes_convulsion) => {
        this.setState({pos_comicial_notes_convulsion});
    };

    handleEpilepsia_tratada_notesChange = (epilepsia_tratada_notes) => {
        this.setState({epilepsia_tratada_notes});
    };

    handleCrise_convulsiva_recente_notes_convulsionChange = (crise_convulsiva_recente_notes_convulsion) => {
        this.setState({crise_convulsiva_recente_notes_convulsion});
    };


    
    render () {
        return (    
            <RootContainer>
                
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'QUEIXA DO PACIENTE'}/>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>

                    <TriTextInput placeholder={'Queixa Principal'} icon={convulsionIcon} onChangeText={this.handleChangeMainComplain}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={convulsionIcon} onChangeText={this.handleDrugsChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={convulsionIcon} onChangeText={this.handleAllergiesChange}/>
                        <TriTextInput placeholder={'Escala de dor'} icon={convulsionIcon} onChangeText={this.handlePainRuleChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={convulsionIcon} onChangeText={this.handleCovidChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={convulsionIcon} onChangeText={this.handleFCChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={convulsionIcon} onChangeText={this.handleFRChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={convulsionIcon} onChangeText={this.handlePASChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={convulsionIcon} onChangeText={this.handlePADChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={convulsionIcon} onChangeText={this.handleSPOChange}/>
                        <TriTextInput placeholder={'Peso'} icon={convulsionIcon} onChangeText={this.handleWeightChange}/>
                        
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Convulsão ativa'
                            iconRight
                            checked={this.state.hasActiveConvulsion}
                            onPress={()=>this.setState({hasActiveConvulsion: !this.state.hasActiveConvulsion})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Comprometimento Vias Aéreas'
                            iconRight
                            checked={this.state.hasAerialObstruction}
                            onPress={()=>this.setState({hasAerialObstruction: !this.state.hasAerialObstruction})}
                        />
                        <TriTextInput placeholder={'Obs Comprometimento\nVias Aéreas'} icon={convulsionIcon} onChangeText={this.handleComprometimento_vias_aereas_notes_convulsionChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alterações Glicêmicas'
                            iconRight
                            checked={this.state.hasGlicemicAlteration}
                            onPress={()=>this.setState({hasGlicemicAlteration: !this.state.hasGlicemicAlteration})}
                        />
                        <TriTextInput placeholder={'Alterações Glicêmicas valor'} icon={convulsionIcon} onChangeText={this.handleAlteracoes_glicemicas_number_convulsionChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Respiração Inadequada'
                            iconRight
                            checked={this.state.hasDisturbedBreathing}
                            onPress={()=>this.setState({hasDisturbedBreathing: !this.state.hasDisturbedBreathing})}
                        />
                        <TriTextInput placeholder={'Obs Respiração Inadequada'} icon={convulsionIcon} onChangeText={this.handleSinais_neurologicos_focais_notes_convulsionChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Sinais Neurológicos Focais'
                            iconRight
                            checked={this.state.hasFocalSigns}
                            onPress={()=>this.setState({hasFocalSigns: !this.state.hasFocalSigns})}
                        />
                        <TriTextInput placeholder={'Obs Sinais Neurológicos\nFocais'} icon={convulsionIcon} onChangeText={this.handleSinais_neurologicos_focais_notes_convulsionChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Crise convulsiva reentrante'
                            iconRight
                            checked={this.state.hasRepeatedConvulsion}
                            onPress={()=>this.setState({hasRepeatedConvulsion: !this.state.hasRepeatedConvulsion})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Menigismo'}
                            iconRight
                            checked={this.state.hasMenigism}
                            onPress={()=>this.setState({hasMenigism: !this.state.hasMenigism})}
                        />
                        <TriTextInput placeholder={'Obs Menigismo'} icon={convulsionIcon} onChangeText={this.handleMenigismo_notes_convulsionChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Overdose/Envenenamento'}
                            iconRight
                            checked={this.state.hasOverdose}
                            onPress={()=>this.setState({hasOverdose: !this.state.hasOverdose})}
                        />
                        <TriTextInput placeholder={'Obs \nOverdose/Envenenamento'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Trauma Craniano Recente'}
                            iconRight
                            checked={this.state.hasRecentTrauma}
                            onPress={()=>this.setState({hasRecentTrauma: !this.state.hasRecentTrauma})}
                        />
                        <TriTextInput placeholder={'Obs Trauma\nCraniano Recente'} icon={convulsionIcon} onChangeText={this.handleTrauma_craniano_recente_notes_convulsionChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Em Pós Comicial'}
                            iconRight
                            checked={this.state.hasPosComicial}
                            onPress={()=>this.setState({hasPosComicial: !this.state.hasPosComicial})}
                        />
                        <TriTextInput placeholder={'Obs Em \nPós Comicial'} icon={convulsionIcon} onChangeText={this.handlePos_comicial_notes_convulsionChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Epilepsia tratada'}
                            iconRight
                            checked={this.state.hasTreatedEpilepsy}
                            onPress={()=>this.setState({hasTreatedEpilepsy: !this.state.hasTreatedEpilepsy})}
                        />
                        <TriTextInput placeholder={'Obs Epilepsia Tratada'} icon={convulsionIcon} onChangeText={this.handleEpilepsia_tratada_notesChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Crise Convulsiva Recente'}
                            iconRight
                            checked={this.state.hasRecentConvulsion}
                            onPress={()=>this.setState({hasRecentConvulsion: !this.state.hasRecentConvulsion})}
                        />
                        <TriTextInput placeholder={'Obs Crise\nConvulsiva Recente'} icon={convulsionIcon} onChangeText={this.handleCrise_convulsiva_recente_notes_convulsionChange}/>


                        <TriTextInput placeholder={'Discriminadores'} icon={convulsionIcon} onChangeText={this.handleDiscriminatorsChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={convulsionIcon} onChangeText={this.handleNurseObsChange}/>

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

export default ConvulsionTriageScreen;