import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';


import At from '../Icons/at.png';
import PasswordIcon from '../Icons/key.png';
import UserIcon from '../Icons/user.png';

import Background from '../components/Background';
import Button from '../components/Button';
import Title from '../components/Title';
import TriTextInput from '../components/TriTextInput';
import RootContainer from '../components/RootContainer';


import { storeData, getData } from '../utils/persist';
import { signin } from '../utils/requests';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        flex: 5,
        alignItems:'center',
        flexDirection:'column-reverse',
    }, 
    midle: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    bottom: {
        flex: 1.5,
        alignItems:'center',
    },

})

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cpf: '',
            name: '',
            email: '',
            password: '',
        };
    }

    handleCPFChange = (cpf) => {
        this.setState({cpf});
    };

    handleNameChange = (name) => {
        this.setState({name});
    };

    handleEmailChange = (email) => {
        this.setState({email});
    };

    handlePasswordChange = (password) => {
        this.setState({password});
    };


/*
    handleSignInPress = async () => {
        this.setState({loading: true});
        const { cpf, name, email, password } = this.state;

        const request = {
            method: 'POST',
            url: 'http://192.168.0.17:3333/patient',
            headers: {'Content-Type': 'application/json'},
            data: {cpf, name, email, password}
        };

        await axios.request(request)
        .then(response => {
            console.log('DEU CERTO:', response.data);
            this.props.navigation.navigate('PatientHomeScreen');
        }).catch(error => {
            console.log('ERRO:', JSON.stringify(error));
        })
    
    };

*/

    handleSignInPress = async () => {
        this.setState({loading: true});
        const { cpf, name, email, password } = this.state;

        const response = await signin(cpf, name, email, password);

        if (response.status === 200) {
            console.log('DEU CERTO O CADASTRO:', response.data);
            await storeData('id', response.data.patient.id);
            await storeData('isNurse', response.data.patient.provider);

            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'PatientHomeScreen' }],
            });

        } else {
            console.log('ERRO:', JSON.stringify(response));
        }
    };

    handleCancelPress = async () => {
        this.props.navigation.goBack();
    };

    


    render () {
        return (
                <RootContainer>
                    <View style={styles.container}> 
                        <View style={styles.logo}>
                            <Title label={'CADASTRO'}/>
                        </View>
                        <View style={styles.midle}> 
                            <TriTextInput placeholder={'CPF'} icon={UserIcon} onChangeText={this.handleCPFChange}/>

                            <TriTextInput placeholder={'Nome Completo'} icon={UserIcon} onChangeText={this.handleNameChange}/>

                            <TriTextInput placeholder={'Email'} icon={At} onChangeText={this.handleEmailChange}/>
                
                            <TriTextInput placeholder={'Senha'} icon={PasswordIcon} onChangeText={this.handlePasswordChange}/>
                            
                        </View>
                        <View style={styles.bottom}>
                            <Button onPress={this.handleSignInPress} label={'CADASTRAR'} width={'40%'}labelColor={'#fafafa'} color={'#1BC47D'} />
                            <View style={{marginTop: 20}}>
                                <Button onPress={this.handleCancelPress} label={'CANCELAR'} labelColor={'#fafafa'} color={'#FB0C0D'} />
                            </View>

                        </View>
                    </View>
                </RootContainer>
        );
    }
}

export default SignInScreen;

