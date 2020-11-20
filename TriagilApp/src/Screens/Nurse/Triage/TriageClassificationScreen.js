import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';


const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        justifyContent:'center'
    },
    top: {
        marginTop: 30,
        flex: 1,
        alignItems: 'center',
    },
    midle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    }, 
    bottom: {
        flex: 1.5,
        alignItems:'center',
        justifyContent: 'center',
    },

})

class TriageClassificationScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            loading: false,
            failed: false,
            text: '',
            priority: 0,
        };

        
    };

    
    render () {
        let result;

        if(this.state.priority === 1) {

            result=(
                <View>
                    <TouchableOpacity 
                        style={{
                            justifyContent: 'center',
                            borderRadius: 95,
                            padding: 55,
                            height: '85%',
                            width: "50%",
                            backgroundColor: '#0099ff',
                        }
                    }>
                        <Text>
                            AZUL
                        </Text>
                    </TouchableOpacity>
                </View>
            );

        } else if(this.state.priority === 2) {

            result=(
                <View>
                    <TouchableOpacity style={{
                                justifyContent: 'center',
                                borderRadius: 95,
                                padding: 55,
                                height: '85%',
                                width: "50%",
                                backgroundColor: '#00ff00'
                                 
                    }}>
                        <Text>
                            VERDE
                        </Text>
                    </TouchableOpacity>
                </View>
            );

        } else if(this.state.priority === 3) {

            result=(
                <View>
                    <TouchableOpacity style={{
                                justifyContent: 'center',
                                borderRadius: 95,
                                padding: 55,
                                height: '85%',
                                width: "50%",
                                backgroundColor: '#FCE40D'
                                 
                    }}>
                        <Text>
                            AMARELO
                        </Text>
                    </TouchableOpacity>
                </View>
            );

        } else if(this.state.priority === 4) {

            result=(
                <View>
                    <TouchableOpacity style={{
                                justifyContent: 'center',
                                borderRadius: 95,
                                padding: 55,
                                height: '85%',
                                width: "50%",
                                backgroundColor: '#FB700C'
                                 
                    }}>
                        <Text>
                            LARANJA
                        </Text>
                    </TouchableOpacity>
                </View>
            );

        } else if(this.state.priority === 5) {

            result=(
                <View>
                    <TouchableOpacity style={{
                                justifyContent: 'center',
                                borderRadius: 95,
                                padding: 55,
                                height: '85%',
                                width: "55%",
                                backgroundColor: '#FB0C0D'
                                 
                    }}>
                        <Text>
                            VERMELHO
                        </Text>
                    </TouchableOpacity>
                </View>
            );

        }

        



        return (    
            <RootContainer>
                
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'CLASSIFICAÇÃO TRIAGEM'}/>
                    </View>
                    <View style={{flex: 2, alignItems:'center', justifyContent:'center'}}>
                        {result}
                    </View>

                    <View style={styles.bottom}>
                        <Button onPress={this.handleSendTriagePress}label={'APROVAR'} width={'40%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                        <View style={{marginTop: 20}}>
                            <Button onPress={this.handleGoBack}label={'ALTERAR'} width={'35%'} labelColor={'#FAFAFA'} color={'#FB0C0D'} />
                        </View>
                    </View>
             
                </View>
            </RootContainer>
        );
    }
}

export default TriageClassificationScreen;