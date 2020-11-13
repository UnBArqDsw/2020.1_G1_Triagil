import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import TriTextInput from '../../components/TriTextInput';

import UserIcon from '../../Icons/user.png';

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

class PatientHomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            loading: false,
        };

    };


    handleNameChange = (name) => {
        this.setState({name: name.toUpperCase()});
    };

    handleChangeNamePress = async () => {
        //disparar a action e transicionar a tela
        const patientInfo = {
            name: this.state.name,
        }
        this.props.updatePatientName(patientInfo);

        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'PatientHomeScreen' }],
        });    

    };

    handleCancelPress = async () => {
        //console.log('AQUI A STORE: ',store.getState());
        this.props.navigation.goBack();
    };
    

  
    render () {
        const {
           name,
        } = this.props;
        

        return (
            <RootContainer>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={50} label={'ALTERE SEU NOME'}/>
                    </View>
                    <View style={styles.content}>
                        <TriTextInput placeholder={name} icon={UserIcon} onChangeText={this.handleNameChange}/>

                    </View>
                    <View style={styles.bottom}>
                        <Button onPress={this.handleChangeNamePress} label={'ALTERAR NOME'} width={'50%'} labelColor={'#fafafa'} color={'#1BC47D'} />
                        <View style={{marginTop: 20}}>
                            <Button style={{marginTop:20}} onPress={this.handleCancelPress} label={'CANCELAR'} width={'40%'} labelColor={'#fafafa'} color={'#FB0C0D'} />

                        </View>
                    </View>
                </View>
            </RootContainer>
        );
    }
}

export default PatientHomeScreen;

