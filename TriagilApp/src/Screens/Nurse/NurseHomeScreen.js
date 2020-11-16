import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';

import PasswordIcon from '../../Icons/key.png';

const styles = StyleSheet.create({
    SuperiorOption: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        justifyContent:'center'
    },
    top: {
        flex: 0.5,
        alignItems: 'center',
    },
    midle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    }, 
    bottom: {
        flex: 2,
        alignItems:'center',
        justifyContent: 'center',
    },
    signUpButton: {
        marginTop: 20,
        padding: 15,
    }
    
})

class NurseHomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        
    };
    
    render () {
        const {
            name,
        } = this.props;
        
        return (
            <RootContainer>
                <View style={styles.SuperiorOption}>
                    <SuperiorOption/>
                </View>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={32} label={'BEM VINDA, ENFERMEIRA ' + name + '!'}/>
                        <Text style={{
                            marginTop: 20, color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}
                        >
                            Está trabalhando? Insira a senha de seu hospital.
                        </Text>
                    </View>
                    
                    <View style={styles.midle}>
                        <TriTextInput placeholder={'Senha do Hospital'} icon={PasswordIcon} onChangeText={this.handlePasswordChange}/>
                        <Button onPress={this.handleLoginPress} label={'ENTRAR'} width={'40%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>

                    <View style={styles.bottom}>
                        <Button onPress={this.handleLoginPress} label={'ALTERAR MINHA SENHA'} width={'80%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>
                    
                    
                </View>
            </RootContainer>
        );
    }
}

export default NurseHomeScreen;

