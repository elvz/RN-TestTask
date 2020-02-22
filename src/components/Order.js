import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import {dimensions, fontsSize, colors} from '../config/styles';

const Order = () => {
  return (
    <View style={styles.order}>
      <TouchableOpacity style={styles.button}>
        <Button title="مستر" />
      </TouchableOpacity>

      <View>
        <Text style={styles.p}>تفضلو</Text>
        <Text style={styles.h1}>1200.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  order: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: dimensions.pctX * 5,
    alignItems: 'center',
    borderTopColor: colors.secondary,
    borderTopWidth: dimensions.pctY * 0.05,
  },
  button: {
    height: 40,
    width: 120,
    borderRadius: 10,
  },
  h1: {
    color: colors.black,
    fontSize: fontsSize.s,
    fontWeight: 'bold',
  },
  p: {
    color: colors.secondary,
    fontSize: fontsSize.xs,
  },
});

export default Order;
