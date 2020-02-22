import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {dimensions, fontsSize, colors} from '../config/styles';

const TopBar = () => {
  return (
    <View style={styles.topbar}>
      <Icon
        name="bars"
        size={20}
        color={colors.black}
        onPress={() => {
          alert('Menu Pressed');
        }}
      />
      <Text style={styles.text}> مستر تاكو</Text>
      <Icon
        name="chevron-right"
        size={20}
        color={colors.black}
        onPress={() => {
          alert('Forward Pressed');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: dimensions.pctY * 10,
    padding: dimensions.pctY * 3,
    backgroundColor: 'transparent',
    borderBottomColor: colors.secondary,
    borderBottomWidth: dimensions.pctY * 0.05,
    marginHorizontal: dimensions.pctX * 3,
  },
  text: {
    color: colors.black,
    fontSize: fontsSize.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TopBar;
