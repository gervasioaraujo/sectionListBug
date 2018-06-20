import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class OverviewScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Overview Screen</Text>
                <TouchableOpacity
                    style={{backgroundColor: 'yellow', padding: 10, margin: 5}}
                    onPress={() => this.props.navigation.navigate('LessonListScreen')}>
                    <Text>Navigate to LessonListScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}