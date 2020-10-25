import React from 'react';
import { Image, View } from 'react-native';

import whiteLogo from '../Images/logoTriagilRedWhite.png';

const Logo = () => {
    return (
        <View 
            style={{
                justifyContent: 'center',
                alignItems:'center',
                alignContent: 'center',
                flexDirection: 'row',
            }}>
            <Image style ={{flex: 0.90 }} source={whiteLogo} resizeMode= 'contain'/>
            
        </View>
        
    );
}

export default Logo;

