import React from 'react';
import { Image, View } from 'react-native';

import whiteLogo from '../Images/logoTriagilRedWhite.png';

const Logo = () => {
    return (
        <Image style ={{flex: 0.1 }} source={whiteLogo} />
    );
}

export default Logo;

