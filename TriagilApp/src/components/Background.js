import React from 'react';
import { ScrollView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

const Background = (props) => {
     
    return ( 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <LinearGradient style={{flex:1}} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']}> 
                <KeyboardAvoidingView
                    behavior='height'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        //backgroundColor: '#ffffff',
                        flex: 1
                    }}
                    >
                    {props.children}

                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>
           
    );
}

export default Background;