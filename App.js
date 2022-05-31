import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import button from '/button';

class App extends Component {
  state = {
    search: '',
  };

  filterList(list) {
    return list.filter(listItem => listItem.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  render() {
    const list = ['MILK', 'BANANA', 'TEA', 'COFFEE','APPLE','WATER'];

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
        />
        {this.filterList(list).map((listItem, index) => (
          <Text key={index} style={styles.itemText}>{listItem}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'black',
  },
  itemText: {
    margin: 10,
    color: 'white',
    fontSize: 24,
    backgroundColor: 'pink',
    width: '100%',
    height: 50
  }
});

export default App;