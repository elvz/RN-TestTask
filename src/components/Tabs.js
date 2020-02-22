import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';

import {dimensions, colors} from '../config/styles';

import MenuList from './MenuList';


const SwipeTabs = () => {
  return (
    <Container>
      <Header style={styles.headerTabs} hasTabs />
      <Tabs
        tabBarUnderlineStyle={{backgroundColor: colors.main}}
        renderTabBar={() => <ScrollableTab />}>
        <Tab
          heading="مستر"
          tabStyle={{backgroundColor: '#fff'}}
          textStyle={{color: colors.secondary}}
          activeTabStyle={{backgroundColor: '#fff'}}
          activeTextStyle={{color: colors.main, fontWeight: 'bold'}}>
          <MenuList />
        </Tab>
        <Tab
          heading="مستر"
          tabStyle={{backgroundColor: '#fff'}}
          textStyle={{color: colors.secondary}}
          activeTabStyle={{backgroundColor: '#fff'}}
          activeTextStyle={{color: colors.main, fontWeight: 'bold'}}>
          <MenuList />
        </Tab>
        <Tab
          heading="مستر"
          tabStyle={{backgroundColor: '#fff'}}
          textStyle={{color: colors.secondary}}
          activeTabStyle={{backgroundColor: '#fff'}}
          activeTextStyle={{color: colors.main, fontWeight: 'bold'}}>
          <MenuList />
        </Tab>
        <Tab
          heading="مستر"
          tabStyle={{backgroundColor: '#fff'}}
          textStyle={{color: colors.secondary}}
          activeTabStyle={{backgroundColor: '#fff'}}
          activeTextStyle={{color: colors.main, fontWeight: 'bold'}}>
          <MenuList />
        </Tab>
        <Tab
          heading="مستر"
          tabStyle={{backgroundColor: '#fff'}}
          textStyle={{color: colors.secondary}}
          activeTabStyle={{backgroundColor: '#fff'}}
          activeTextStyle={{color: colors.main, fontWeight: 'bold'}}>
          <MenuList />
        </Tab>
        <Tab
          heading="مستر"
          tabStyle={{backgroundColor: '#fff'}}
          textStyle={{color: colors.secondary}}
          activeTabStyle={{backgroundColor: '#fff'}}
          activeTextStyle={{color: colors.main, fontWeight: 'bold'}}>
          <MenuList />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerTabs: {
    height: dimensions.pctY * 0,
  },
});

export default SwipeTabs;
