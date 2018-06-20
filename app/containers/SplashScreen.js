import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Splash Screen</Text>
                <TouchableOpacity
                    style={{backgroundColor: 'yellow', padding: 10, margin: 5}}
                    onPress={() => this.props.navigation.navigate('OverviewScreen')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}