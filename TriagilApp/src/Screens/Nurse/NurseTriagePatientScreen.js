import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';
import ComplainCard from '../../components/ComplainCard';

import headacheIcon from '../../Icons/headache.png';
import soreThroatIcon from '../../Icons/sore-throat.png';
import diarrheaIcon from '../../Icons/vomiting.png';
import dizzyIcon from '../../Icons/dizzy.png';
import convulsionIcon from '../../Icons/faint.png';

import { eraseData } from '../../utils/persist';

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
    },

    
})

class NurseTriageScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            loading: false,
            failed: false,
        };

        
    };

    handleLogOffPress = async (props) => {
        //console.log('AQUI A STORE: ',store.getState());
        await this.props.resetSession();
        await eraseData();

        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });    

    };

    handleHeadachePress = async () => {
        this.setState({loading: true});
        this.props.navigation.navigate(
            'HeadacheTriage', { patient: this.props.route.params.patient }
        ); 
        this.setState({loading: false});
        
    };

    handleSoreThroatPress = async () => {
        this.setState({loading: true});
        this.props.navigation.navigate(
            'SoreThroatTriage', { patient: this.props.route.params.patient }
        );  
        this.setState({loading: false});
        
    };
    handleDiarrheaPress = async () => {
        this.setState({loading: true});
        this.props.navigation.navigate(
            'DiarrheaTriage', { patient: this.props.route.params.patient }
        );  
        this.setState({loading: false});

    };
    handleDizzyPress = async () => {
        this.setState({loading: true});
        this.props.navigation.navigate(
            'FaintingTriage', { patient: this.props.route.params.patient }
        );  
        this.setState({loading: false});

    };
    handleConvulsionPress = async () => {
        this.setState({loading: true});
        this.props.navigation.navigate(
            'ConvulsionTriage', { patient: this.props.route.params.patient }
        );  
        this.setState({loading: false});

    };


    
    render () {
        return (    
            <RootContainer>
                <View style={styles.SuperiorOption}>
                    <SuperiorOption props={this.props} logOff={this.handleLogOffPress}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'QUEIXA DO PACIENTE'}/>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>

                        <ComplainCard onPress={this.handleHeadachePress} disabled={this.state.loading} icon={headacheIcon} label={'DOR DE CABEÇA'} />
                        <ComplainCard onPress={this.handleSoreThroatPress} disabled={this.state.loading} icon={soreThroatIcon} label={'DOR DE GARGANTA'} />
                        <ComplainCard onPress={this.handleDiarrheaPress} disabled={this.state.loading} icon={diarrheaIcon} label={'DIARREIA E VÔMITO'} />
                        <ComplainCard onPress={this.handleDizzyPress} disabled={this.state.loading} icon={dizzyIcon} label={'DESMAIO, TONTURA, VERTIGEM'} />
                        <ComplainCard onPress={this.handleConvulsionPress} disabled={this.state.loading} icon={convulsionIcon} label={'CONVULSÃO'} />

                    </View>
             
                </View>
            </RootContainer>
        );
    }
}

export default NurseTriageScreen;