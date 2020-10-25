import React from 'react';
import { View } from 'react-native';

import Background from './Background'

const styles = StyleSheet.create({
    container: {
      flex:1 ,
    },
    background: {
      width: '100%',
      height: '100%',
    },
  });

const TriView = () => {
    return (
        <Background style={styles.background}>
            <View style={styles.container}>
            
            </View>
        </Background>
    );
}

export default TriView;