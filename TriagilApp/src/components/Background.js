import React from 'react';
import { Keyboard, TouchableWithoutFeedback} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

const Background = (props) => {
     
    return ( 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <LinearGradient style={{flex:1}} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']}> 
                {props.children}
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Background;