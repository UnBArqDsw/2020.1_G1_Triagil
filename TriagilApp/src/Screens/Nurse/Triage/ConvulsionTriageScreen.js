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
            password: '',
            loading: false,
            failed: false,
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

                        <TriTextInput placeholder={'Queixa Principal'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Peso'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        
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
                        <TriTextInput placeholder={'Obs Comprometimento\nVias Aéreas'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alterações Glicêmicas'
                            iconRight
                            checked={this.state.hasGlicemicAlteration}
                            onPress={()=>this.setState({hasGlicemicAlteration: !this.state.hasGlicemicAlteration})}
                        />
                        <TriTextInput placeholder={'Alterações Glicêmicas valor'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Respiração Inadequada'
                            iconRight
                            checked={this.state.hasDisturbedBreathing}
                            onPress={()=>this.setState({hasDisturbedBreathing: !this.state.hasDisturbedBreathing})}
                        />
                        <TriTextInput placeholder={'Obs Respiração Inadequada'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Sinais Neurológicos Focais'
                            iconRight
                            checked={this.state.hasFocalSigns}
                            onPress={()=>this.setState({hasFocalSigns: !this.state.hasFocalSigns})}
                        />
                        <TriTextInput placeholder={'Obs Sinais Neurológicos\nFocais'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>

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
                        <TriTextInput placeholder={'Obs Menigismo'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
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
                        <TriTextInput placeholder={'Obs Trauma\nCraniano Recente'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Em Pós Comicial'}
                            iconRight
                            checked={this.state.hasPosComicial}
                            onPress={()=>this.setState({hasPosComicial: !this.state.hasPosComicial})}
                        />
                        <TriTextInput placeholder={'Obs Em \nPós Comicial'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Epilepsia tratada'}
                            iconRight
                            checked={this.state.hasTreatedEpilepsy}
                            onPress={()=>this.setState({hasTreatedEpilepsy: !this.state.hasTreatedEpilepsy})}
                        />
                        <TriTextInput placeholder={'Obs Epilepsia Tratada'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Crise Convulsiva Recente'}
                            iconRight
                            checked={this.state.hasRecentConvulsion}
                            onPress={()=>this.setState({hasRecentConvulsion: !this.state.hasRecentConvulsion})}
                        />
                        <TriTextInput placeholder={'Obs Crise\nConvulsiva Recente'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>


                        <TriTextInput placeholder={'Discriminadores'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={convulsionIcon} onChangeText={this.handlePasswordChange}/>

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