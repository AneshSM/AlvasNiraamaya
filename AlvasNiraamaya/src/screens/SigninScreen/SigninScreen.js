import React, {useState, useContext} from 'react';

// modules
import {
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

// Components
import {
  ColumnContainer,
  CustomText,
  CustomeButton,
  CustomeInput,
  SocialSignInButtons,
} from '../../components';

// constants
import {COLORS, IMGS, ROUTES} from '../../constants';

// styles
import {SigninScreen_Style} from '../../styles';
import {AuthContext} from '../../context/AuthProvider';

const SigninScreen = () => {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // console.log(errors);

  const [alert, setAlert] = useState();
  const [mailStatus, setMailStatus] = useState(false);

  const showAlert = setTimeout(() => {
    setMailStatus(false);
    clearTimeout(showAlert);
  }, 10000);

  const {signin, signinError, signinMessage} = useContext(AuthContext);

  const onSiginPressed = data => {
    const {Email, Password} = data;
    // Authentication
    try {
      signin(Email, Password);
    } catch (error) {
      if (error.message === 'auth/email-already-in-use') {
        setMailStatus(true);
        setAlert('That email address is already in use');
      }
      console.log('hi');
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.warn('SignUp');
    navigation.navigate('SignUp');
  };

  const BottomCard = () => {
    return (
      <View style={styles.bottomCard}>
        <ScrollView>
          <CustomeInput
            placeholder="Username"
            name="Email"
            control={control}
            rules={{required: 'Username is required'}}
          />
          <CustomeInput
            placeholder="Password"
            name="Password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be minimum 8 characters long',
              },
            }}
            secureTextEntry
          />
          <CustomeButton text="LogIn" onPress={handleSubmit(onSiginPressed)} />
          <CustomeButton
            text="Forgot Password ?"
            onPress={onForgotPasswordPressed}
            type="Tertiary"
          />
          <SocialSignInButtons />
          <CustomeButton
            text="Don't have an account ? Create one"
            onPress={onSignUpPressed}
            type="Tertiary"
          />
          {mailStatus && (
            <View style={styles.alert_container}>
              <CustomText factor={30} style={styles.message}>
                {alert}
              </CustomText>
            </View>
          )}
        </ScrollView>
      </View>
    );
  };

  return (
    <ColumnContainer>
      <TopCard />
      <BottomCard />
    </ColumnContainer>
  );
};

export default SigninScreen;

const TopCard = () => {
  return (
    <View style={styles.topCard}>
      <View style={(styles.logoContainer, SigninScreen_Style.logo)}>
        <Image
          style={(styles.logo, SigninScreen_Style.image)}
          source={IMGS.logo}
          resizeMode="contain"
        />
      </View>
      <CustomText factor={9} style={(styles.heading, SigninScreen_Style.text)}>
        {ROUTES.TITLE}
      </CustomText>
    </View>
  );
};

const {width} = Dimensions.get('window');

const CARD_WIDTH = width;
const styles = StyleSheet.create({
  alert_container: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.alert,
    borderRadius: 10,
  },
  message: {
    color: COLORS.clr60,
    fontSize: 19,
    textAlign: 'center',
  },
  topCard: {
    width: CARD_WIDTH,
    elevation: 3,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLORS.clr30,
  },
  bottomCard: {
    width: CARD_WIDTH,
    borderRadius: 10,
    backgroundColor: COLORS.clr60,
    elevation: 3,
    padding: 30,
    flex: 1,
  },
});
