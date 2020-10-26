import React from 'react';
import { KeyboardAvoidingView} from 'react-native';


const Background = (props) => {
     
    return ( 
        <KeyboardAvoidingView
            behavior='height'
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