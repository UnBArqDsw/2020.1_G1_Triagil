import React from 'react';
import { View } from 'react-native';


import TriView from '../components/TriView';

const styles = SyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center' ,
    }
})

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render () {
        return (
            <TriView>

            </TriView>
        );
    }
}

export default LoginScreen;