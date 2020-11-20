import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';
import TriTextInput from '../../../components/TriTextInput';

import dizzyIcon from '../../../Icons/dizzy.png';


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

class FaintingTriageScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            loading: false,
            failed: false,
            hasAllergy: false,

            hasAerialObstruction: false,
            hasGlicemicAlteration: false,
            hasHardness: false,
            hasShockSigns: false,
            hasAnormalPulse: false,
            hasChestPain: false,
            hasBalanceDisturb: false,
            hasPosComicial: false,
            hasDispneia: false,
            hasFaintAllergies: false,
            hasNeurologicalDeficit: false,
            hasRecentTrauma: false,
            hasUnconsciousness: false,
            hasFirstConvulsion: false,
            hasRecentConvulsion: false,
            hasParestesia: false,

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

                        <TriTextInput placeholder={'Queixa Principal'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Peso'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        
                        <TriTextInput placeholder={'Alteração de Consciência\nEscala de Coma\nGlasgow'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Comprometimento Vias Aéreas'
                            iconRight
                            checked={this.state.hasAerialObstruction}
                            onPress={()=>this.setState({hasAerialObstruction: !this.state.hasAerialObstruction})}
                        />
                        <TriTextInput placeholder={'Obs Comprometimento\nVias Aéreas'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alterações Glicêmicas'
                            iconRight
                            checked={this.state.hasGlicemicAlteration}
                            onPress={()=>this.setState({hasGlicemicAlteration: !this.state.hasGlicemicAlteration})}
                        />
                        <TriTextInput placeholder={'Alterações Glicêmicas valor'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Rigidez'
                            iconRight
                            checked={this.state.hasHardness}
                            onPress={()=>this.setState({hasHardness: !this.state.hasHardness})}
                        />
                        <TriTextInput placeholder={'Obs Rigidez'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Sinais de Choque'
                            iconRight
                            checked={this.state.hasShockSigns}
                            onPress={()=>this.setState({hasShockSigns: !this.state.hasShockSigns})}
                        />
                        <TriTextInput placeholder={'Obs Sinais de Choque'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Pulso Anormal'
                            iconRight
                            checked={this.state.hasAnormalPulse}
                            onPress={()=>this.setState({hasAnormalPulse: !this.state.hasAnormalPulse})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Dor Torácica'}
                            iconRight
                            checked={this.state.hasChestPain}
                            onPress={()=>this.setState({hasChestPain: !this.state.hasChestPain})}
                        />
                        <TriTextInput placeholder={'Obs Dor\nTorácica'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Distúrbio Súbito de Equilíbrio'}
                            iconRight
                            checked={this.state.hasBalanceDisturb}
                            onPress={()=>this.setState({hasBalanceDisturb: !this.state.hasBalanceDisturb})}
                        />
                        <TriTextInput placeholder={'Obs Distúrbio\nSúbito Equilíbrio'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Dor 1-10'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Em Pós Comicial'}
                            iconRight
                            checked={this.state.hasPosComicial}
                            onPress={()=>this.setState({hasPosComicial: !this.state.hasPosComicial})}
                        />
                        <TriTextInput placeholder={'Obs Em \nPós Comicial'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Dispneia Aguda'}
                            iconRight
                            checked={this.state.hasDispneia}
                            onPress={()=>this.setState({hasDispneia: !this.state.hasDispneia})}
                        />
                        <TriTextInput placeholder={'Temperatura'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Alergia'}
                            iconRight
                            checked={this.state.hasFaintAllergies}
                            onPress={()=>this.setState({hasFaintAllergies: !this.state.hasFaintAllergies})}
                        />
                        <TriTextInput placeholder={'Obs Alergias'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Cefaleia\n1-10'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Déficit Neurológico'}
                            iconRight
                            checked={this.state.hasNeurologicalDeficit}
                            onPress={()=>this.setState({hasNeurologicalDeficit: !this.state.hasNeurologicalDeficit})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Trauma Craniano Recente'}
                            iconRight
                            checked={this.state.hasRecentTrauma}
                            onPress={()=>this.setState({hasRecentTrauma: !this.state.hasRecentTrauma})}
                        />
                        <TriTextInput placeholder={'Obs Trauam\Craniano Recente'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Inconsciência'}
                            iconRight
                            checked={this.state.hasUnconsciousness}
                            onPress={()=>this.setState({hasUnconsciousness: !this.state.hasUnconsciousness})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Primeira Convulsão'}
                            iconRight
                            checked={this.state.hasFirstConvulsion}
                            onPress={()=>this.setState({hasFirstConvulsion: !this.state.hasFirstConvulsion})}
                        />
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Crise Convulsiva Recente'}
                            iconRight
                            checked={this.state.hasRecentConvulsion}
                            onPress={()=>this.setState({hasRecentConvulsion: !this.state.hasRecentConvulsion})}
                        />
                        <TriTextInput placeholder={'Obs Crise\nConvulsiva Recente'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title={'Parestesia'}
                            iconRight
                            checked={this.state.hasParestesia}
                            onPress={()=>this.setState({hasParestesia: !this.state.hasParestesia})}
                        />
                        <TriTextInput placeholder={'Obs Parestesia'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>

                        <TriTextInput placeholder={'Discriminadores'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={dizzyIcon} onChangeText={this.handlePasswordChange}/>

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

export default FaintingTriageScreen;