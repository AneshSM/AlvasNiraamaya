import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';
const SigninScreen_Style = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  head: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: COLORS.clr30,
    padding: 28,
    position: 'absolute',
    top: 0,
    zIndex: 4,
  },
  logo: {
    backgroundColor: COLORS.clr60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: COLORS.clr10,
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  image: {
    objectFit: 'contain',
    height: 110,
    marginTop: -20,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 55,
    color: COLORS.clr10,
    fontWeight: 'bold',
    textShadowColor: COLORS.clr60,
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 3,
  },
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 280,
    flexGrow: 1,
    backgroundColor: COLORS.clr60,
  },
  form: {
    paddingTop: 100,
  },
});

export default SigninScreen_Style;
