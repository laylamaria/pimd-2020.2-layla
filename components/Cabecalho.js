import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { style } from '../components/css/index'

export class Cabecalho extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={style.bold}>{this.props.nome}</Text>
                <Text style={style.bold}>{this.props.curso}</Text>
            </View>
        )
    }
}
export default Cabecalho