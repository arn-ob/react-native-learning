import React from "react";
import { FlatList, ActivityIndicator, Text, View, ScrollView, Button  } from 'react-native';
import { List, ListItem, Tile, Card  } from 'react-native-elements'
import {
  StyleSheet, Platform
} from "react-native";

export default class Second extends React.Component {
    
  constructor(props){
      super(props);
      this.state ={ isLoading: true}
  }

   // for Getting Data from Server 
  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

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
    }
    return (
      <ScrollView containerStyle={{padding: 10}}>
        
        <View>
          <Tile
            imageSrc={require('./img/img.jpg')}
            title="Lorem ipsum dolor sit amet, consectetur"
            contentContainerStyle={{ height: 70 }}
          >
            <View
              style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Caption</Text>
              <Text>Caption</Text>
            </View>
          </Tile>
        </View>

        {/* <View>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text style={{backgroundColor :'red', marginTop: 5}} key={item.id}>{item.id}, {item.title}</Text>}
            keyExtractor={({id}, index) => id}
            onPress={() => console.log(item.title)}
          />
        </View> */}

        <List  containerStyle={{marginBottom: 20}}>
          {
            this.state.dataSource.map((item) => (
              <Button key={item.id} title={item.title} style={styles.button} onPress={() => console.log(item.title)}></Button>
            ))
          }
        </List>
        <Text style={{marginBottom: 10}}>Details Screen</Text>
      </ScrollView>
    );
    
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
  }),
})