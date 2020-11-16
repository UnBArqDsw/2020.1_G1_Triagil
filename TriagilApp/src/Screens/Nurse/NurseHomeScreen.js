import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent:'center',
    },
    SuperiorOption: {
        marginTop: 30,
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
                <SafeAreaView style={styles.container}>
                    <View style={styles.SuperiorOption}>
                        <SuperiorOption/>
                    </View>
                    <View style={styles.logo}>
                        <Title label={'BEM VINDA, ENFERMEIRA ' + {name} + '!'}/>
                    </View>
                    
                    
                </SafeAreaView>
            </RootContainer>
        );
    }
}

export default NurseHomeScreen;

