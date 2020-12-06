import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flexWrap: "wrap",
        alignContent: "center",
    },

    navbar: {
        backgroundColor: "#070836",
        alignItems: "center",
        padding: 20,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },

    bold: {
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        fontSize: 30,
    },

    foto: {
        borderRadius: 500,
        width: 200,
        height: 200,
        margin: 20,
        borderWidth: 3,
        borderColor: "black",
    },

    perfil: {
        borderRadius: 100,
        width: 200,
        height: 200,
        margin: 20,
        borderWidth: 3,
        borderColor: "#dabe5d",
    },

    disciplina: {
        backgroundColor: "black",
        margin: 10,
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        borderRadius: 10,
        color: "white"
    },

    body: {
        flex: 1,
    }
})

export {style}