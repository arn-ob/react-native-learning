import React from "react";
import {
    StyleSheet
} from "react-native";



const styles = StyleSheet.create({
    pad: {
        flex: 1
    },
    container: {
        marginTop: 30,
        flex: 2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    aligns: {
        flex: 1,
        flexDirection: 'row',
        width: 50, 
        color: '#C0C0C0',
        textAlign: 'center'
    },
    containers: {
        flex: 1,
        backgroundColor: '#ddd',
        paddingTop: 20
    },
    box: {
        backgroundColor: 'red'
    },
    button: {
        borderColor: 1,
        borderWidth: 1,
    }
});

export default styles;