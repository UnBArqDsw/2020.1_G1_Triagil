import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';
import SuperiorOption from '../../../components/superiorOption';
import TriTextInput from '../../../components/TriTextInput';

import headacheIcon from '../../../Icons/headache.png';


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

class HeadacheTriageScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            loading: false,
            failed: false,
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


    
    render () {
        return (    
            <RootContainer>
                
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'QUEIXA DO PACIENTE'}/>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>

                        <TriTextInput placeholder={'Queixa Principal'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Peso'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Estado Mental Alterado'
                            iconRight
                            checked={this.state.hasDisturbedMentalState}
                            onPress={()=>this.setState({hasDisturbedMentalState: !this.state.hasDisturbedMentalState})}
                        />
                        <TriTextInput placeholder={'Obs Estado Mental'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Sinais de Choque'
                            iconRight
                            checked={this.state.hasShockSigns}
                            onPress={()=>this.setState({hasShockSigns: !this.state.hasShockSigns})}
                        />
                        <TriTextInput placeholder={'Obs Sinais de Choque'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
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
                        <TriTextInput placeholder={'Obs Sinais Neurológicos\nFocais'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Aumento súbito dor'
                            iconRight
                            checked={this.state.hasPainGrowth}
                            onPress={()=>this.setState({hasPainGrowth: !this.state.hasPainGrowth})}
                        />
                        <TriTextInput placeholder={'Obs Aumento Súbito dor'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
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
                        <TriTextInput placeholder={'Obs de Menigismo'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Dor Escala 1-10'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Temperatura'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Inconsciência'
                            iconRight
                            checked={this.state.hasUnconsciouness}
                            onPress={()=>this.setState({hasUnconsciouness: !this.state.hasUnconsciouness})}
                        />
                        <TriTextInput placeholder={'Obs Inconsciência'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Nausea ou Vômito'
                            iconRight
                            checked={this.state.hasDizzy}
                            onPress={()=>this.setState({hasDizzy: !this.state.hasDizzy})}
                        />

                        <TriTextInput placeholder={'Discriminadores'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={headacheIcon} onChangeText={this.handlePasswordChange}/>

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