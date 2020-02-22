import {Dimensions} from 'react-native';

export const dimensions = {
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
  pctX: Dimensions.get('window').width / 100,
  pctY: Dimensions.get('window').height / 100,
};

export const fontsSize = {
  xl: dimensions.pctX * 8,
  l: dimensions.pctX * 7,
  m: dimensions.pctX * 6,
  s: dimensions.pctX * 5,
  xs: dimensions.pctX * 4,
  xxs: dimensions.pctX * 2,
};

export const colors = {
  black: '#040404',
  secondary: '#727477',
  main: '#1179e2'
};
