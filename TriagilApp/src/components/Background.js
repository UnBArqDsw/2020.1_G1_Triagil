import React from 'react';
import { Platform, KeyboardAvoidingView} from 'react-native';


const Background = (props) => {
     
    return ( 
        <KeyboardAvoidingView
            behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            >
            {props.children}

        </KeyboardAvoidingView>      
    );
}

export default Background;