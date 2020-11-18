import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import Button from '../../components/Button';
import Title from '../../components/Title';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';
import { LinearGradient } from "expo-linear-gradient";

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
        justifyContent: 'center'
    },
    midle: {
        flex: 2,
    },
    patientName: {
        borderColor: '#1BC47D',
        borderWidth: 4,
        borderBottomWidth: 0,
        borderRadius: 2,
        marginLeft: 10,
        width: '60%',
        
    },
    bottom: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
    },
    signUpButton: {
        marginTop: 20,
        padding: 15,
    }
    
})

class NursePatientInfoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        
    };

    
    
    render () {
        
        
        return (
            <LinearGradient style={{flex: 1,flexGrow: 1, justifyContent: 'center'}} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']}>

                <View style={styles.container}>
                    <View style={styles.SuperiorOption}>
                        <SuperiorOption logOff={this.handleLogOffPress}/>
                    </View>
                    
                    <View style={styles.top}>
                        <Title fontsize={32} label={'FICHA DO PACIENTE!'}/>
                    </View>
                    
                    <View style={styles.midle}>
                        <View style={styles.patientName}>
                            <Text style={{fontSize: 26, marginLeft: 10, color:'#FAFAFA'}}>Nome x</Text>
                        </View>
                        <ScrollView style={{ borderTopColor: '#1BC47D', borderTopWidth: 5}}
                            contentContainerStyle={{ alignItems: 'center'}}
                        >
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>
                            <TriTextInput editable={false} placeholder={'Senha do Hospital'} icon={PasswordIcon}/>

                        </ScrollView>
                    </View>
                    
                        

                    <View style={styles.bottom}>
                        <Button label={'VOLTAR'} width={'35%'} labelColor={'#FAFAFA'} color={'#FB0C0D'} />
                        <Button label={'INICIAR TRIAGEM'} width={'55%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                    </View>
            
                </View>
            </LinearGradient>
        );
    }
}

export default NursePatientInfoScreen;
