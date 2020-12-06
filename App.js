import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';
import {style} from './components/css/index'

export default function App() {
  return (
      <View style={style.body}>
      <StatusBar backgroundColor={"#381859"}></StatusBar>
      <Cabecalho nome="Layla Maria" curso="Design Digital"></Cabecalho>
      <Corpo></Corpo>
      <Disciplina disciplina="PIDM"></Disciplina>
      <Disciplina disciplina="E-BUSINESS"></Disciplina>
      <Disciplina disciplina="EMPREENDEDORISMO"></Disciplina>
    </View>
  );
}

