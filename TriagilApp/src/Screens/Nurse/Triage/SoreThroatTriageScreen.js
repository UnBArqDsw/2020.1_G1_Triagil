import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';
import TriTextInput from '../../../components/TriTextInput';

import soreThroatIcon from '../../../Icons/sore-throat.png';


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

class SoreThroatTriageScreen extends React.Component {
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
            hasAerialObstruction: false,
            hasLaryngealStridor: false,
            hasRecentTrip: false,
            hasSwallowingDifficulty: false,
            hasBurningSore: false,

            comprometimento_vias_aereas_notes_soathroat:"" ,
            pain_soathroat: 0,
            estridor_laringeo_notes: "",
            temperatura_soathroat: 0.0,

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

    handleComprometimentoViasAereasChange = (comprometimento_vias_aereas_notes_soathroat) => {
        this.setState({comprometimento_vias_aereas_notes_soathroat});
    };

    handlePain_soathroatChange = (pain_soathroat) => {
        this.setState({pain_soathroat});
    };

    estridor_laringeo_notes = (estridor_laringeo_notes) => {
        this.setState({estridor_laringeo_notes});
    };

    temperatura_soathroat = (temperatura_soathroat) => {
        this.setState({temperatura_soathroat});
    };




    
    render () {
        return (    
            <RootContainer>
                
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'QUEIXA DO PACIENTE'}/>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>

                    <TriTextInput placeholder={'Queixa Principal'} icon={soreThroatIcon} onChangeText={this.handleChangeMainComplain}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={soreThroatIcon} onChangeText={this.handleDrugsChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={soreThroatIcon} onChangeText={this.handleAllergiesChange}/>
                        <TriTextInput placeholder={'Escala de dor'} icon={soreThroatIcon} onChangeText={this.handlePainRuleChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={soreThroatIcon} onChangeText={this.handleCovidChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={soreThroatIcon} onChangeText={this.handleFCChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={soreThroatIcon} onChangeText={this.handleFRChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={soreThroatIcon} onChangeText={this.handlePASChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={soreThroatIcon} onChangeText={this.handlePADChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={soreThroatIcon} onChangeText={this.handleSPOChange}/>
                        <TriTextInput placeholder={'Peso'} icon={soreThroatIcon} onChangeText={this.handleWeightChange}/>
                        
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Comprometimento Vias Aéreas'
                            iconRight
                            checked={this.state.hasAerialObstruction}
                            onPress={()=>this.setState({hasAerialObstruction: !this.state.hasAerialObstruction})}
                        />
                        <TriTextInput placeholder={'Obs Comprometimento\nVias Aéreas'} icon={soreThroatIcon} onChangeText={this.handleComprometimentoViasAereasChange}/>
                        <TriTextInput placeholder={'Nível de dor\n1-10'} icon={soreThroatIcon} onChangeText={this.handlePain_soathroatChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Estridor laríngeo'
                            iconRight
                            checked={this.state.hasLaryngealStridor}
                            onPress={()=>this.setState({hasLaryngealStridor: !this.state.hasLaryngealStridor})}
                        />
                        <TriTextInput placeholder={'Obs Estridor laríngeo'} icon={soreThroatIcon} onChangeText={this.estridor_laringeo_notes}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Viagem Recente'
                            iconRight
                            checked={this.state.hasRecentTrip}
                            onPress={()=>this.setState({hasRecentTrip: !this.state.hasRecentTrip})}
                        />
                        <TriTextInput placeholder={'Temperatura'} icon={soreThroatIcon} onChangeText={this.temperatura_soathroat}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Dificuldade para deglutir'
                            iconRight
                            checked={this.state.hasSwallowingDifficulty}
                            onPress={()=>this.setState({hasSwallowingDifficulty: !this.state.hasSwallowingDifficulty})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Ardência na Garganta\nsem Sialorreia'}
                            iconRight
                            checked={this.state.hasBurningSore}
                            onPress={()=>this.setState({hasBurningSore: !this.state.hasBurningSore})}
                        />

                        <TriTextInput placeholder={'Discriminadores'} icon={soreThroatIcon} onChangeText={this.handleDiscriminatorsChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={soreThroatIcon} onChangeText={this.handleNurseObsChange}/>

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

export default SoreThroatTriageScreen;