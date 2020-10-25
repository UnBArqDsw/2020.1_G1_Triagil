import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import UserIcon from '../Icons/user.png';
import PasswordIcon from '../Icons/key.png';


import Button from '../components/Button';
import Logo from '../components/Logo';
import TriTextInput from '../components/TriTextInput';
import Background from '../components/Background';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        flex: 2,
        alignItems:'center',
        flexDirection:'column-reverse',
    }, 
    midle: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    bottom: {
        flex: 2,
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

        };
    }
    render () {
        return (
            <Background> 
                <View style={styles.container}> 
                    <View style={styles.logo}>
                        <Logo/>
                    </View>
                    <View style={styles.midle}> 
                        <TriTextInput placeholder={'Email'} icon={UserIcon}/>
            
                        <TriTextInput placeholder={'Senha'} icon={PasswordIcon}/>
                        
                    </View>
                    <View style={styles.bottom}>
                        <Button label={'     LOGIN     '} labelColor={'#00C0FF'} color={'#fafafa'} />
                        
                        <TouchableOpacity 
                            style={styles.signUpButton}
                        >
                            <Text style={{fontSize: 20, color: '#fafafa', fontWeight:'bold'}}> CADASTRAR </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Background>
        );
    }
}

export default LoginScreen;

