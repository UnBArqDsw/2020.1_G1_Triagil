import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';

import PasswordIcon from '../../Icons/key.png';
import { eraseData } from '../../utils/persist';

import store from '../../reducers/store';

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

class HospitalLineScreen extends React.Component {
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
                    <SuperiorOption logOff={this.handleLogOffPress}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={32} label={'FILA PARA TRIAGEM'}/>
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

export default HospitalLineScreen;

    