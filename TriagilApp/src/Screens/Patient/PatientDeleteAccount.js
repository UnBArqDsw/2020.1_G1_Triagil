import React from 'react';
import {StyleSheet,Text, View} from 'react-native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import TriTextInput from '../../components/TriTextInput';


import UserIcon from '../../Icons/user.png';
import PasswordIcon from '../../Icons/key.png';

import { eraseData } from '../../utils/persist';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    top: {
        flex: 2,
        alignItems: 'center',
        justifyContent:'center',
    },
    content: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottom: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

class PatientDeleteAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false,
        };

    };

    handleEmailChange = (email) => {
        this.setState({email});
    };

    handlePasswordChange = (password) => {
        this.setState({password});
    };


    handleDeleteAccountPress = async () => {
        //fazer a chamada para o backend e consumir o serviço
        //também pode se restar a store por uma action
        
        await eraseData();

        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });    

    };

    handleCancelPress = async () => {
        //console.log('AQUI A STORE: ',store.getState());
        this.props.navigation.goBack();
    };
    

  
    render () {   

        return (
            <RootContainer>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={50} label={'EXCLUIR CONTA'}/>
                        <Text style={{marginTop: 5, color: 'white', fontWeight: 'bold'}}>Tem certeza que deseja partir?</Text>

                    </View>
                    <View style={styles.content}>
                        <TriTextInput placeholder={'Email'} icon={UserIcon} onChangeText={this.handlePasswordChange}/>
                        
                        <TriTextInput placeholder={'Senha'} icon={PasswordIcon} onChangeText={this.handleNewPasswordChange}/>
                       
                    </View>
                    <View style={styles.bottom}>
                        <Button onPress={this.handleDeleteAccountPress} label={'Excluir conta'} width={'50%'} labelColor={'#fafafa'} color={'#FB0C0D'}  />
                        <View style={{marginTop: 20}}>
                            <Button style={{marginTop:20}} onPress={this.handleCancelPress} label={'VOLTAR'} width={'40%'} labelColor={'#fafafa'} color={'#1BC47D'} />
                        </View>
                    </View>
                </View>
            </RootContainer>
        );
    }
}

export default PatientDeleteAccount;

