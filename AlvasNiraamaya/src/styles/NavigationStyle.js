/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

import {COLORS} from '../constants';
const {width, height} = Dimensions.get('window');

const bottomTabStyle = {
  tab_container: {
    position: 'absolute',
    backgroundColor: COLORS.clr30,
    borderTop: 0,
    bottom: 15,
    right: 15,
    left: 15,
    borderRadius: 50,
    height: 85,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 10,
  },
  label: {
    marginTop: -20,
    paddingBottom: 15,
    fontSize: Math.min(width, height) / 38,
  },
};
export default bottomTabStyle;
