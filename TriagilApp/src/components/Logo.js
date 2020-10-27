import React from 'react';
import { Image, View } from 'react-native';

import whiteLogo from '../Images/logoTriagilRedWhite.png';

const Logo = () => {
    return (
        <Image style={{width: '80%', height: '10%'}} source={whiteLogo}  resizeMode='center'/>
    );
}

export default Logo;

