import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import UserIcon from '../Icons/user.png';
import PasswordIcon from '../Icons/key.png';

import whiteLogo from '../Images/logoTriagilRedWhite.png';

import Button from '../components/Button';
import Logo from '../components/Logo';
import TriTextInput from '../components/TriTextInput';
import RootContainer from '../components/RootContainer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    top: {
        flex: 0.01,
        alignItems: 'center',
        justifyContent:'flex-start',
        flexDirection:'column-reverse',
    },
    midle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    bottom: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
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

        };

        
    }

    handleSignInPress = async () => {
        this.props.navigation.navigate('SignIn');
    }

    
    render () {


        return (
                <RootContainer>

                    <SafeAreaView style={styles.container}>
                        
                        
                        <View style={styles.top}>
                            <Image style={{width:300, height:300}} source={whiteLogo} resizeMode='contain'/>
                        </View>                        

                        <View style={styles.midle}> 
                            <TriTextInput placeholder={'Email'} icon={UserIcon}/>
                            <TriTextInput placeholder={'Senha'} icon={PasswordIcon}/>
                        </View>

                        <View style={styles.bottom}>
                            <Button label={'LOGIN'} width={'40%'} labelColor={'#00C0FF'} color={'#fafafa'} />
                            <TouchableOpacity 
                                style={styles.signUpButton}
                                onPress={this.handleSignInPress}
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

