import React, { Component } from 'react';
import {
    Text,
    View,
    SectionList
} from 'react-native';

export default class LessonListScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <SectionList
                    style={{ backgroundColor: 'red' }}
                    sections={[
                        { title: 'Title1', data: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'] },
                        { title: 'Title2', data: ['item9', 'item10', 'item11', 'item12', 'item13', 'item14', 'item15', 'item16'] }
                    ]}
                    renderItem={({ item, index }) => {
                        return (
                            <Text style={{ padding: 20, backgroundColor: 'white' }}>{item}</Text>
                        )
                    }}
                    renderSectionHeader={({ section }) => {
                        return (
                            <Text style={{ padding: 20, paddingLeft: 3, backgroundColor: 'lightgray' }}>{section.title}</Text>
                        );
                    }}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}