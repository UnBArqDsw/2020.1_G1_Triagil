import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});


const RootContainer = (props) => {
    return(
		<LinearGradient style={{flex: 1}} colors={['rgba(1,50,126,1)', 'rgba(88,200,245,1)']}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				keyboardDismissMode="on-drag"
				style={{flex: 1, flexGrow:1}}
				contentContainerStyle={{
					display: 'flex',
					flexGrow: 1,
					justifyContent: 'center'
				}}
			>
				<View style={styles.container}>
					{props.children}
				</View>
			</ScrollView>
		</LinearGradient>


    );
};

export default RootContainer;