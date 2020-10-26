import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import At from '../Icons/at.png';
import PasswordIcon from '../Icons/key.png';
import UserIcon from '../Icons/user.png';

import Background from '../components/Background';
import Button from '../components/Button';
import Title from '../components/Title';
import TriTextInput from '../components/TriTextInput';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        flex: 1.5,
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
        justifyContent: 'flex-start',
    },

})

class SignInScreen extends React.Component {
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
                        <Title label={'CADASTRO'}/>
                    </View>
                    <View style={styles.midle}> 
                        <TriTextInput placeholder={'Nome Completo'} icon={UserIcon}/>

                        <TriTextInput placeholder={'Email'} icon={At}/>
            
                        <TriTextInput placeholder={'Senha'} icon={PasswordIcon}/>
                        
                    </View>
                    <View style={styles.bottom}>
                        <Button label={'CADASTRAR'} width={'40%'}labelColor={'#fafafa'} color={'#1BC47D'} />
                        <View style={{marginTop: 20}}>
                            <Button label={'CANCELAR'} labelColor={'#fafafa'} color={'#FB0C0D'} />
                        </View>

                    </View>
                </View>
            </Background>
        );
    }
}

export default SignInScreen;

