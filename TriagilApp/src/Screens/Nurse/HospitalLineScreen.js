import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';


import Button from '../../components/Button';
import Title from '../../components/Title';
import RootContainer from '../../components/RootContainer';
import SuperiorOption from '../../components/superiorOption';
import TriTextInput from '../../components/TriTextInput';
import PatientCard from '../../components/PatientCard';

const styles = StyleSheet.create({
    SuperiorOption: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        justifyContent:'center'
    },
    top: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#1BC47D',
        borderTopWidth: 1,
        
    },
    btnNormal: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: 10,
        //backgroundColor:'#1BC47D',
    },
    btnPressed: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: 10,
        backgroundColor:'#1BC47D',
    },
    content: {
        flex: 2,
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
            regularLine: false,
            data: [1,2,3],
            
        };

        
    };



    handleLinePress = () => {
        this.setState({regularLine: !this.state.regularLine});
        console.log('O ESTADO AQUI: ', this.state.regularLine);
    }



    btnPress = (pressed) => {
        if (pressed === true ){
            return {
                width: '50%',
                padding: 10,
                backgroundColor:'#1BC47D',
            }
        } else {
            return {
                btnPress:{
                    width: '50%',
                    padding: 10,
                },
            }
        }

    }
  
    
    
    render () {
 
        let PreferentialButton;
        let RegularButton;
        let content;

        if(this.state.regularLine === false) {
            PreferentialButton = (
                <TouchableOpacity style={styles.btnPressed} onPress={this.handleLinePress}>
                    <Text style={{textAlign: 'center', color: '#FAFAFA', fontWeight: 'bold'}}
                    >
                        PREFERENCIAL
                    </Text>
                </TouchableOpacity>
            );

            RegularButton = (
                <TouchableOpacity style={styles.btnNormal} onPress={this.handleLinePress}>
                    <Text style={{textAlign: 'center', color: '#FAFAFA', fontWeight: 'bold'}}
                    >
                        NORMAL
                    </Text>
                </TouchableOpacity>
            );
            //mostrar os pacientes preferenciais
            
            
        } else {
            //mostrar os pacientes normais
            PreferentialButton = (
                <TouchableOpacity style={styles.btnNormal} onPress={this.handleLinePress}>
                    <Text style={{textAlign: 'center', color: '#FAFAFA', fontWeight: 'bold'}}
                    >
                        PREFERENCIAL
                    </Text>
                </TouchableOpacity>
            );

            RegularButton = (
                <TouchableOpacity style={styles.btnPressed} onPress={this.handleLinePress}>
                    <Text style={{textAlign: 'center', color: '#FAFAFA', fontWeight: 'bold'}}
                    >
                        NORMAL
                    </Text>
                </TouchableOpacity>
            );
            
        }
        
        
        return (
            <RootContainer>
                <View style={styles.SuperiorOption}>
                    <SuperiorOption logOff={this.handleLogOffPress}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={40} label={'FILA PARA TRIAGEM'}/>
                    </View>
                    <View style={styles.lineButtons}>
                        {PreferentialButton}
                        {RegularButton}
                    </View>
                    <View style={styles.content}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                            <PatientCard
                                onPress={() => this.moreInfo(item)}
                            />
                            )}
                            keyExtractor={(item) => item}
                        />
                    </View>
                    
                    
                </View>
            </RootContainer>
        );
    }
}

export default HospitalLineScreen;

    