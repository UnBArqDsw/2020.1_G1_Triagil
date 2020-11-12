import React from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';

import styled from 'styled-components/native';

const StyledText = styled.Text`
    color: #FFFFFF;
    text-shadow: 0px 4px 4px #DC1A23;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 67px;
    text-align: center;
`

const Title = (props) => {
    const {label, fontsize} = props;

    return (
        <TouchableWithoutFeedback> 
            <StyledText style={{fontSize: fontsize}}>{label}</StyledText>
        </TouchableWithoutFeedback>
    );  
}

export default Title;