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
            password: '',
            loading: false,
            failed: false,
            hasAllergy: false,

            hasAerialObstruction: false,
            hasLaryngealStridor: false,
            hasRecentTrip: false,
            hasSwallowingDifficulty: false,
            hasBurningSore: false,
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

                        <TriTextInput placeholder={'Queixa Principal'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Peso'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Comprometimento Vias Aéreas'
                            iconRight
                            checked={this.state.hasAerialObstruction}
                            onPress={()=>this.setState({hasAerialObstruction: !this.state.hasAerialObstruction})}
                        />
                        <TriTextInput placeholder={'Obs Comprometimento\nVias Aéreas'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Nível de dor\n1-10'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>

                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Estridor laríngeo'
                            iconRight
                            checked={this.state.hasLaryngealStridor}
                            onPress={()=>this.setState({hasLaryngealStridor: !this.state.hasLaryngealStridor})}
                        />
                        <TriTextInput placeholder={'Obs Estridor laríngeo'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Viagem Recente'
                            iconRight
                            checked={this.state.hasRecentTrip}
                            onPress={()=>this.setState({hasRecentTrip: !this.state.hasRecentTrip})}
                        />
                        <TriTextInput placeholder={'Temperatura'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>

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

                        <TriTextInput placeholder={'Discriminadores'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={soreThroatIcon} onChangeText={this.handlePasswordChange}/>

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