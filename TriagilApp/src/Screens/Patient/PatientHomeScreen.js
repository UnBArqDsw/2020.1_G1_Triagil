import React from 'react';
import axios from 'axios';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    midle: {
        flex: 1.25,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    bottom: {
        flex: 0.5,
        alignItems:'center',
    },
    signUpButton: {
        marginTop: 20,
        padding: 15,
    }
    
})

class PatientHomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        
    };

  

    
    render () {


        return (
            <RootContainer>
                <SafeAreaView style={styles.container}>
                    <View style={styles.logo}>
                        <Title label={'PACIENTE'}/>
                    </View>
                    
                    
                </SafeAreaView>
            </RootContainer>
        );
    }
}

export default PatientHomeScreen;

