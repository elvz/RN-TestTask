import React from 'react';
import {View, StyleSheet} from 'react-native';


import TopBar from './components/TopBar';
import Header from './components/Header';
import Nav from './components/Nav';
import SwipeTabs from './components/Tabs';
import Order from './components/Order';

const App = () => {
  

  return (
    <View style={styles.container}>
      <TopBar />
      <Header />
      <Nav />
      <SwipeTabs />
      <Order />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
