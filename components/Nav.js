import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Nav extends React.Component {
    render() {
        return(
            <View style={style.nav}>
                <Text style={{marginTop: 10, color: 'white'}}>
                    {this.props.propName}
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    nav : {
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        height: 60,
        borderWidth: 2
    }
});
