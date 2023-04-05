import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';
const SigninScreen_Style = StyleSheet.create({
  head: {
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: COLORS.clr30,
    flex: 1,
  },
  logo: {
    backgroundColor: COLORS.clr60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.clr10,
    height: '55%',
    width: '35%',
    borderRadius: 100,
  },
  image: {
    objectFit: 'contain',
    height: 100,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  text: {
    fontSize: 60,
    color: COLORS.clr10,
    fontWeight: 'bold',
    textShadowColor: COLORS.clr60,
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 3,
  },
});

export default SigninScreen_Style;
