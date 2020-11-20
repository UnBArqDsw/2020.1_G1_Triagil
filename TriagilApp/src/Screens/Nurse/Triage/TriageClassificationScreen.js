import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import RootContainer from '../../../components/RootContainer';
import { getTriagePriority, changePriority } from '../../../utils/requests';
import store from '../../../reducers/store';
import TriTextInput from '../../../components/TriTextInput';

import { Overlay } from 'react-native-elements';


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
            visible: false,
            text: '',
            priority: 0,
            newPriority: 4,
            myTriageRecord: {},
        };

        
    };

    async componentDidMount() {
        const response = await getTriagePriority();
        //console.log('AQUI A RESPOSTA:\n', response.data);
        let data = response.data.allTriageRecords;
        let triageRecordId = store.getState();

        let myTriageRecords = data.filter(function (el) {
            return el.id_patient_record === triageRecordId.triageRecord.id_patient_record;
        });
        console.log('OLHA a classificação: ', myTriageRecords);
        
        let myTriageRecord = myTriageRecords[0];

        await this.setState({priority: myTriageRecord.manchester_priority, myTriageRecord});
    }


    handleChangePriorityPress = async () => {
        this.setState({visible:true});
        //this.setState({priority: 2});


        /*
        let recordInfo = {
            id: this.state.myTriageRecord.id,
            manchester_priority: this.state.newPriority,
        };
        
        this.setState({priority: this.state.newPriority});
        //const response = await changePriority(recordInfo);
*/

    };

    handlePriorityChange = async (number) => {
        this.setState({priority: number});
    };

    handleFinishTriage = () => {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'HospitalLine' }],
        })
    }

    
    render () {

        let result;

        if(this.state.priority == 1) {

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

        } else if(this.state.priority == 2) {

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

        } else if(this.state.priority == 3) {

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

        } else if(this.state.priority == 4) {

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

        } else if(this.state.priority == 5) {

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
                    <Overlay isVisible={this.state.visible} onBackdropPress={()=>this.setState({visible: false})}>
                        <TriTextInput placeholder={'Qual a nova classificação?\n1-Azul\n2-Verde\n3-Amarelo\n4-Laranja\n5-Vermelho'} onChangeText={this.handlePriorityChange}/>
                    </Overlay>
                    <View style={styles.top}>
                        <Title fontsize={38} label={'CLASSIFICAÇÃO TRIAGEM'}/>
                    </View>
                    <View style={{flex: 2, alignItems:'center', justifyContent:'center'}}>
                        {result}
                    </View>

                    <View style={styles.bottom}>
                        <Button onPress={this.handleFinishTriage}label={'APROVAR'} width={'40%'} labelColor={'#FAFAFA'} color={'#1BC47D'} />
                        <View style={{marginTop: 20}}>
                            <Button onPress={this.handleChangePriorityPress}label={'ALTERAR'} width={'35%'} labelColor={'#FAFAFA'} color={'#FB0C0D'} />
                        </View>
                    </View>
             
                </View>
            </RootContainer>
        );
    }
}

export default TriageClassificationScreen;