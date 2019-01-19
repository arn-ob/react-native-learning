import React from "react";
import { FlatList, ActivityIndicator, Text, View, ScrollView, Button  } from 'react-native';
import { List, ListItem, Tile, Card  } from 'react-native-elements'
import {
  StyleSheet, Platform
} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class Third extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      tableHead: ['id', 'Name'],
      tableData: ['','' ]
    }
  }

  componentDidMount(){
    return fetch('https://mikrotik-control.appspot.com/ppp_enable_user_print')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
          len: responseJson.length
        }, function(){
          console.log(this.state.len);
          console.log('ready');
          this.state.dataSource.map((item) => ( this.state.tableData.push({'name':item.name, 'profile':item.profile})))
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text>Loading</Text>
        </View>
      )
    } else {

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hello</Text>
          <Button title="Get Result" onPress = {() => {
              // console.log(this.state.dataSource);
              console.log(this.state.tableData);
            }}/>

        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
        </Table>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});