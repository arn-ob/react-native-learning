import React from "react";
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { Badge, Button, Header } from "react-native-elements";
import Nav from './components/Nav'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './style'
import Second from './page/Second/Second'
import Third from './page/Third/Third'

// For nav
class HomeScreen extends React.Component {
  state = {
    data: 10,
    text: "Hello",
    arr: ["1", "2", "3"]
  };

  clickEvent = () => {
    this.state.text = "Hellows";
    this.setState({ text: this.state.text });

    this.state.data++;
    this.setState({ data: this.state.data });
  };

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Arnob',
  };

  render() {
    
    return (
      
      <View style={styles.pad}>
        
        <Nav propName="Test Application"/>

        <View style={styles.container}>
          <Badge value={this.state.data} textStyle={{ color: "orange" }} />
          
          
          {this.state.arr.map(as => (
            <Text style={{color: 'red', alignContent: 'center'}} key={as}>{as}</Text>
          ))}


          <Text>{this.state.text}</Text>
          <Text>How Are You</Text>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View>
          <Button style={styles.aligns}
              raised
              icon={{ name: "cached" }}
              title="Details"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button style={styles.aligns}
              raised
              icon={{ name: "cached" }}
              title="Data"
              onPress={() => this.props.navigation.navigate('Data')}
            />
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Arnob 2',
  };

  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Second/>
      </View>
    );
  }
}

class DataScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Data',
  };

  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Third/>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Data: DataScreen,
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  
  render() {
    return (
     <AppContainer />
    );
  }
}

