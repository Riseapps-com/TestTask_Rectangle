import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Rectangle extends React.Component {
    interval;

    constructor(props) {
        super(props);
        this.state = {
            color: this.getRandomColor(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({
            color: this.getRandomColor(),
        }), 33.3);
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
    }

    render() {
        const {color} = this.state;
        return (
            <View style={[styles.container, {backgroundColor: color}]}>
                <Text style={styles.text}>
                    {color}
                </Text>
            </View>
        );
    }

    getRandomColor = () => `#${((1 << 24) * Math.random() | 0).toString(16)}`;
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
    },
});

export default Rectangle;
