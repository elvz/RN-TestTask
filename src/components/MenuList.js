import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
import {uuid} from 'uuidv4';

import {dimensions, fontsSize, colors} from '../config/styles';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const MenuList = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/1.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/2.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/3.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/4.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/5.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/6.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/7.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/8.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/9.jpg'),
      price: 22.9,
    },
    {
      id: uuid(),
      mainText: 'مستر تاكو',
      description:
        'متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على',
      pic: require('../assets/img/10.jpg'),
      price: 22.9,
    },
  ]);
  return (
    <ScrollView>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.price}>
              <Text style={styles.h1}>{item.price}</Text>
            </View>
            <View style={styles.desc}>
              <Text style={styles.h1}>{item.mainText}</Text>
              <Text style={styles.p}>{item.description}</Text>
            </View>
            <View style={styles.pic}>
              <Image source={item.pic} style={styles.img} />
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: dimensions.pctX * 3,
    padding: dimensions.pctY * 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: colors.secondary,
    borderBottomWidth: dimensions.pctY * 0.05,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  price: {
    width: 50,
  },
  desc: {
    width: 200,
  },
  pic: {
    width: 50,
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

export default MenuList;
