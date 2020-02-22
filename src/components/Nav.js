import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {dimensions, fontsSize, colors} from '../config/styles';

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Text style={styles.text}>تفضلو</Text>
      <Icon
        name="map-marker"
        size={20}
        color={colors.main}
        onPress={() => {
          alert('Marker Pressed');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    marginHorizontal: dimensions.pctX * 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
      color: colors.secondary,
      fontSize: fontsSize.xs,
      paddingHorizontal: dimensions.pctX*2
  }
});

export default Nav;