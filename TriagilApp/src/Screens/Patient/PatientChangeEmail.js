import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import TriTextInput from '../../components/TriTextInput';

import AtIcon from '../../Icons/at.png';

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
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

class PatientChangeEmail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            loading: false,
        };

    };


    handleEmailChange = (email) => {
        this.setState({email});
    };

    handleChangeEmailPress = async () => {
        //disparar a action e transicionar a tela
        const patientInfo = {
            email: this.state.email,
        }
        this.props.updatePatientEmail(patientInfo);

        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'PatientHomeScreen' }],
        });    

    };

    handleCancelPress = async () => {
        //console.log('AQUI A STORE: ',store.getState());
        this.props.navigation.goBack();
    };

    checkString = () => {
        if (this.state.email !== "") {
            return false;            
        } else {
            return true;
        }
    }
    

  
    render () {
        const {
           email,
        } = this.props;
        

        return (
            <RootContainer>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={50} label={'ALTERE SEU EMAIL'}/>
                    </View>
                    <View style={styles.content}>
                        <TriTextInput placeholder={email} icon={AtIcon} onChangeText={this.handleEmailChange}/>

                    </View>
                    <View style={styles.bottom}>
                        <Button disabled={this.checkString} onPress={this.handleChangeEmailPress} label={'ALTERAR EMAIL'} width={'50%'} labelColor={'#fafafa'} color={'#1BC47D'} />
                        <View style={{marginTop: 20}}>
                            <Button style={{marginTop:20}} onPress={this.handleCancelPress} label={'CANCELAR'} width={'40%'} labelColor={'#fafafa'} color={'#FB0C0D'} />
                        </View>
                    </View>
                </View>
            </RootContainer>
        );
    }
}

export default PatientChangeEmail;

