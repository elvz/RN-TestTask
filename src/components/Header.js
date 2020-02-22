import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {dimensions, fontsSize, colors} from '../config/styles';

const Header = () => {
  let pic = require('../assets/img/7.jpg');
  return (
    <View style={styles.header}>
      <View>
        <Image source={pic} style={styles.image} />
      </View>
      <View style={styles.description}>
        <Text style={styles.h1}> مستر تاكو</Text>
        <Text style={styles.p}>
          متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: dimensions.pctX * 3,
    padding: dimensions.pctY * 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: dimensions.pctX * 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  description: {
    width: dimensions.pctX * 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h1: {
    color: colors.black,
    fontSize: fontsSize.l,
    fontWeight: 'bold',
  },
  p: {
    color: colors.secondary,
    fontSize: fontsSize.xs,
  },
});

export default Header;
