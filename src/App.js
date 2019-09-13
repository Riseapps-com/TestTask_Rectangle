import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Rectangle from './Rectangle';

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Rectangle/>
            </SafeAreaView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};
