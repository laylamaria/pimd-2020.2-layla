import React, { Component } from 'react'
import { Image, View } from 'react-native'
import {style} from '../components/css/index'

export class Corpo extends Component {
    render() {
        let foto = {
            uri: "https://www.eatinout.com.br/wp-content/uploads/2016/09/GIRASSOL.jpg"
        }
        return (
            <View style={style.container}>
                <Image source={foto.uri} style={style.foto} resizeMode="cover"/>
            </View>
        )
    }
}

export default Corpo