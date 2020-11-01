import React from 'react';
import axios from 'axios';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import UserIcon from '../Icons/user.png';
import PasswordIcon from '../Icons/key.png';

import whiteLogo from '../Images/logoTriagilRedWhite.png';

import Button from '../components/Button';
import TriTextInput from '../components/TriTextInput';
import RootContainer from '../components/RootContainer';

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
        };

        
    };

    handleSignInPress = async () => {
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

        const request = {
            method: 'POST',
            url: 'http://192.168.0.17:3333/login',
            headers: {'Content-Type': 'application/json'},
            data: {email, password}
        };

        await axios.request(request)
        .then(response => {
            console.log('DEU CERTO:', response.data);
            this.identifyUser(response.data);

        }).catch(error => {
            console.log('ERRO:', JSON.stringify(error));
        })
    
    };


    identifyUser = (response) => {
        response.patientExists.provider === false ? (
            //setar na store as informações do usuário
            this.props.navigation.navigate('PatientHomeScreen')
        ) : (
            //setar na store as informações da enfermeira
            this.props.navigation.navigate('NurseHomeScreen')
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

