import React from 'react';
import { Image, View } from 'react-native';

import whiteLogo from '../Images/logoTriagilRedWhite.png';

const Logo = () => {
    return (
        /*<View 
            style={{
                
                //flexDirection:'row-reverse',
                //justifyContent: 'flex-end',
                //alignItems:'center',
                //alignContent: 'center',
                //flexDirection: 'row',
            }}>
        */
            <Image style ={{flex: 0.8 }} source={whiteLogo} resizeMode='center'/>
            
        //</View>
        
    );
}

export default Logo;

