import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import Button from '../components/Button';
import PasswordIcon from '../Icons/key.png';
import RootContainer from '../components/RootContainer';
import TriTextInput from '../components/TriTextInput';
import UserIcon from '../Icons/user.png';
import whiteLogo from '../Images/logoTriagilRedWhite.png';

import store from '../reducers/store';

import { login } from '../utils/requests';
import { storeData, getData } from '../utils/persist';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    midle: {
        flex: 1.25,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    bottom: {
        flex: 0.5,
        alignItems:'center',
    },
    signUpButton: {
        marginTop: 20,
        padding: 15,
    }
    
})

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loading: false,
            failed: false,
        };

    }; 


    handleSignInPress = async () => {
        console.log('AQUI A STORE: ',store.getState());
        this.props.navigation.navigate('SignIn');
    };
    
    handleEmailChange = (email) => {
        this.setState({email});
    };

    handlePasswordChange = (password) => {
        this.setState({password});
    };

    handleLoginPress = async () => {
        this.setState({loading: true});
        const { email, password } = this.state;

        const response = await login(email, password);

        if (response.status === 200) {
            console.log('DEU CERTO:', response.data);
            this.identifyUser(response.data);
        } else {
            console.log('ERRO:', JSON.stringify(response));
        }
        
    };

    identifyUser = async (response) => {
        await storeData('id', response.accountExists.id);
        await storeData('isNurse', response.accountExists.provider);
        //await storeData('token', response.data.accessToken);
        let userInfo;

        if (response.accountExists.provider === false) {
            userInfo = {
                provider: response.accountExists.provider,
                patient: {
                    id: response.accountExists.id,
                    cpf: response.accountExists.cpf,
                    email: response.accountExists.email,
                    name: response.accountExists.name,
                }
            };
        } else {
            userInfo = {
                provider: response.accountExists.provider,
                nurse: {
                    id: response.accountExists.id,
                    cre: response.accountExists.cre,
                    email: response.accountExists.email,
                    name: response.accountExists.name,
                }
            };
    
        }

        await this.props.addUserInfo(userInfo);
        
        //Posteriormente, trocar a passagem de tela para as actions
        //e realizar a checagem pela store
        response.accountExists.provider === false ? (
            //setar na store as informações do usuário
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'PatientHomeScreen' }],
              })
            
        ) : (
            //setar na store as informações da enfermeira
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'NurseHomeScreen' }],
              })
        )

    };

    
    render () {


        return (
            <RootContainer>
                <SafeAreaView style={styles.container}>
                    
                    <View style={styles.top}>
                        <Image style={{width:'80%', height:100}} source={whiteLogo} resizeMode='contain'/>
                    </View>                        

                    <View style={styles.midle}> 
                        <TriTextInput placeholder={'Email'} icon={UserIcon} onChangeText={this.handleEmailChange}/>
                        <TriTextInput placeholder={'Senha'} icon={PasswordIcon} onChangeText={this.handlePasswordChange} secureTextEntry={true}/>
                    </View>

                    <View style={styles.bottom}>
                        <Button onPress={this.handleLoginPress} label={'LOGIN'} width={'40%'} labelColor={'#00C0FF'} color={'#fafafa'} />
                        <TouchableOpacity 
                            style={styles.signUpButton}
                            onPress={this.handleSignInPress}
                            enabled={!this.state.loading}
                            >
                            <Text style={{fontSize: 20, color: '#fafafa', fontWeight:'bold'}}> CADASTRAR </Text>
                        </TouchableOpacity>
                    </View>
                    
                </SafeAreaView>
            </RootContainer>
        );
    }
}

export default LoginScreen;

