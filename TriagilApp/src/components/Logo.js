import React from 'react';
import { Image,Text, View } from 'react-native';

import whiteLogo from '../Images/whiteLogo.png';

const Logo = () => {
    return (
        <View 
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems:'center',
                alignContent: 'center',
                flexDirection: 'row',
            }}>
            <Image style ={{flex: 0.40 }} source={whiteLogo} resizeMode= 'contain'/>
            <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white', borderLeftWidth: 2, borderColor:'white'}}> TRIAGIL</Text>
        </View>
        
    );
}

export default Logo;

