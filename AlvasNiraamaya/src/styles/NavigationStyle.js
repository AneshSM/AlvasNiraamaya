/* eslint-disable prettier/prettier */
import {COLORS} from '../constants';

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
  },
  icon: {
    paddingTop: 15,
  },
};
export default bottomTabStyle;
