import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';

import { SearchBar } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";

import Title from '../../components/Title';
import SuperiorOption from '../../components/superiorOption';
import PatientCard from '../../components/PatientCard';
import RoundButton from '../../components/RoundButton';

import {hospitalLine} from '../../utils/requests';


const styles = StyleSheet.create({
    SuperiorOption: {
        flex: 0.1,
        marginTop: 30,
    },
    container: {
        flex: 1,
        justifyContent:'center'
    },
    top: {
        flex: 0.5,
        justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: 'red',
    },
    lineButtons: {
        flex: 0.2,
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
            selectedLine: true, //true-> preferential, false -> regular
            data: [],
            search: '',
            preferential: [],
            regular: [],
            loading: false,
            
        };

        
    };

    async componentDidMount() {
        const response = await hospitalLine();
        //console.log('AQUI A RESPOSTA:\n', response.data);
        const preferential = response.data.preferential;
        const regular = response.data.noPreferential;
        
        await this.setState({preferential, regular});
        //console.log('OLHA O STATE: ', this.state);
        await this.setState({data: preferential});
        console.log('OLHA O STATE DEPOIS: ', this.state);
    }


    handleLinePress = async (boolean) => {
        this.setState({selectedLine: boolean});
        if ( boolean === true){
            await this.setState({data: this.state.preferential});
        } else {
            await this.setState({data: this.state.regular});
        }
        //console.log('O ESTADO AQUI: ', this.state.selectedLine);
        
    };

    updateSearch = (search) => {
        this.setState({ search });
      };

    moreInfo (item) {
        this.props.navigation.navigate('SpecificPatient', { patient: item });
    }
    
    render () {
 
        let PreferentialButton;
        let RegularButton;

        if(this.state.selectedLine === true) {
            PreferentialButton = (
                <TouchableOpacity style={styles.btnPressed} onPress={() => this.handleLinePress(true)}>
                    <Text style={{textAlign: 'center', color: '#FAFAFA', fontWeight: 'bold'}}
                    >
                        PREFERENCIAL
                    </Text>
                </TouchableOpacity>
            );

            RegularButton = (
                <TouchableOpacity style={styles.btnNormal} onPress={() => this.handleLinePress(false)}>
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
                <TouchableOpacity style={styles.btnNormal} onPress={() => this.handleLinePress(true)}>
                    <Text style={{textAlign: 'center', color: '#FAFAFA', fontWeight: 'bold'}}
                    >
                        PREFERENCIAL
                    </Text>
                </TouchableOpacity>
            );

            RegularButton = (
                <TouchableOpacity style={styles.btnPressed} onPress={() =>this.handleLinePress(false)}>
                    <Text style={{textAlign: 'center', color: '#FAFAFA', fontWeight: 'bold'}}
                    >
                        NORMAL
                    </Text>
                </TouchableOpacity>
            );
            
        }
        
        
        return (			
        
        <LinearGradient style={{flex: 1,flexGrow: 1, justifyContent: 'center'}} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']}>

                <View style={styles.SuperiorOption}>
                    <SuperiorOption logOff={this.handleLogOffPress}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Title fontsize={36} label={'FILA PARA TRIAGEM'}/>
                    </View>
                    <View style={styles.lineButtons}>
                        {PreferentialButton}
                        {RegularButton}
                    </View>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center'}}>
                            <SearchBar 
                                style={{flex: 1}}
                                placeholder="Nome do Paciente"
                                onChangeText={this.updateSearch}
                                value={this.state.search}
                                lightTheme={true}
                                containerStyle={{ width: '70%', borderRadius: 10, margin: 5}}
                            />
                            <RoundButton style={{flex: 1}}/>


                        </View>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                            <PatientCard
                                name={item.name}
                                age={item.age}
                                gender={item.sex}
                                queuePosition={item.id}
                                onPress={() => this.moreInfo(item)}
                            />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                    
                    
                </View>

            </LinearGradient>
        );
    }
}

export default HospitalLineScreen;

    