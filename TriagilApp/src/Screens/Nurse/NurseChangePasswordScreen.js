import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import TriTextInput from '../../components/TriTextInput';

import PasswordIcon from '../../Icons/key.png';

import store from '../../reducers/store';
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

class NurseChangePassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newPassword: '',
            confirmNewPassword: '',
            loading: false,
        };

    };


    handlePasswordChange = (password) => {
        this.setState({password});
    };

    handleNewPasswordChange = (newPassword) => {
        this.setState({newPassword});
    };

    handleConfirmNewPasswordChange = (confirmNewPassword) => {
        this.setState({confirmNewPassword});
    };

    handleChangePasswordPress = async () => {
        //disparar a action e transicionar a tela
        const nurseInfo = {
            password: this.state.newPassword,
        }
        //this.props.updateNursePassword(nurseInfo);

        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'NurseHomeScreen' }],
        });    

    };

    handleCancelPress = async () => {
        //console.log('AQUI A STORE: ',store.getState());
        this.props.navigation.goBack();
    };
    

  
    render () {
        const {
           password,
        } = this.props;
        

        return (
            <RootContainer>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={50} label={'ALTERE SUA SENHA'}/>
                    </View>
                    <View style={styles.content}>
                        <TriTextInput placeholder={'Senha atual'} icon={PasswordIcon} onChangeText={this.handlePasswordChange}/>
                        
                        <TriTextInput placeholder={'Nova Senha'} icon={PasswordIcon} onChangeText={this.handleNewPasswordChange}/>
                       
                        <TriTextInput placeholder={'Confirmar Senha'} icon={PasswordIcon} onChangeText={this.handleConfirmNewPasswordChange}/>

                    </View>
                    <View style={styles.bottom}>
                        <Button onPress={this.handleChangePasswordPress} label={'ALTERAR SENHA'} width={'50%'} labelColor={'#fafafa'} color={'#1BC47D'} />
                        <View style={{marginTop: 20}}>
                            <Button style={{marginTop:20}} onPress={this.handleCancelPress} label={'CANCELAR'} width={'40%'} labelColor={'#fafafa'} color={'#FB0C0D'} />

                        </View>
                    </View>
                </View>
            </RootContainer>
        );
    }
}

export default NurseChangePassword;

