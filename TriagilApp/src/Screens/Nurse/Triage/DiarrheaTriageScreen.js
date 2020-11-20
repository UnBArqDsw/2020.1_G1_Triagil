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
            password: '',
            loading: false,
            failed: false,
            hasAllergy: false,

            hasBloodedPuke: false,
            hasAbdominalPain: false,
            hasBlackPoop: false,
            hasDehydration: false,
            hasDistantPuke: false,
            hasRecentEvent: false,

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

                        <TriTextInput placeholder={'Queixa Principal'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Medicamentos'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Alergia'
                            iconRight
                            checked={this.state.hasAllergy}
                            onPress={()=>this.setState({hasAllergy: !this.state.hasAllergy })}
                        />
                        <TriTextInput placeholder={'Quais alergias?'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'COVID19?\n0 - Não\n1 - Sim'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Cardíaca(FC)'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Frequência Resíratória(FR)'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAS) P. Arterial. Sistólica'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(PAD) P. Arterial. Distólica'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'(SPO02%) Sat.Per.O2'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Peso'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Vômito com sangue'
                            iconRight
                            checked={this.state.hasBloodedPuke}
                            onPress={()=>this.setState({hasBloodedPuke: !this.state.hasBloodedPuke})}
                        />
                        <TriTextInput placeholder={'Obs Vômito\ncom sangue'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Dor Abdominal'
                            iconRight
                            checked={this.state.hasAbdominalPain}
                            onPress={()=>this.setState({hasAbdominalPain: !this.state.hasAbdominalPain})}
                        />
                        <TriTextInput placeholder={'Alteração Consciência\nEscala de Glasgow'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Perfusão Periférica'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Temperatura'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Fezes Enegrecidas/Geléia de groselha'
                            iconRight
                            checked={this.state.hasBlackPoop}
                            onPress={()=>this.setState({hasBlackPoop: !this.state.hasBlackPoop})}
                        />
                        <TriTextInput placeholder={'Obs Fezes Engegrecidas\nGeléia de groselha'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Dor 1-10'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <CheckBox
                            containerStyle={{backgroundColor:'#C3ECFA', width: '80%', borderRadius: 15}}
                            textStyle={{color:'#64757B'}}
                            center
                            title='Desidratação'
                            iconRight
                            checked={this.state.hasDehydration}
                            onPress={()=>this.setState({hasDehydration: !this.state.hasDehydration})}
                        />
                        <TriTextInput placeholder={'Obs Desidratação'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
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

                        <TriTextInput placeholder={'Discriminadores'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>
                        <TriTextInput placeholder={'Observações da\nenfermeira(o)'} icon={diarrheaIcon} onChangeText={this.handlePasswordChange}/>

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