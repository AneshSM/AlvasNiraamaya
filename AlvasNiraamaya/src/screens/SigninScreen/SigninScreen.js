import React from 'react';

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

//flash message
import {showMessage} from 'react-native-flash-message';

// icon
import Icon from 'react-native-vector-icons/FontAwesome';

// Firebase
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

const SigninScreen = () => {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // console.log(errors);
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const onSiginPressed = async data => {
    const {Email, Password} = data;
    // Authentication
    try {
      await auth().signInWithEmailAndPassword(Email, Password);
      showMessage({
        message: 'SignedIn succesfully',
        description: "Welcome to Alva's Niraamaya Application",
        type: 'success',
        icon: 'auto',
      });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        showMessage({
          message: 'user-not-found',
          description: 'That email address is not registered!',
          type: 'warning',
          icon: () => (
            <Icon
              name="warning"
              size={30}
              color="#aa2020"
              style={{paddingRight: 20, paddingTop: 14}}
            />
          ),
          position: 'bottom',
        });
      }
      if (error.code === 'auth/wrong-password') {
        showMessage({
          message: 'wrong-password',
          description: 'Please enter an valid password',
          type: 'warning',
          icon: () => (
            <Icon
              name="warning"
              size={30}
              color="#aa2020"
              style={{paddingRight: 20, paddingTop: 14}}
            />
          ),
          position: 'bottom',
        });
      }
      if (error.code === 'auth/too-many-requests') {
        showMessage({
          message: 'too-many-requests',
          description:
            'We have blocked all requests from this device due to unusual activity. Try again later. [ Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. ',
          type: 'warning',
          icon: () => (
            <Icon
              name="warning"
              size={30}
              color="#aa2020"
              style={{paddingRight: 20, paddingTop: 14}}
            />
          ),
          position: 'bottom',
        });
      }
      if (error.code === 'auth/network-request-failed') {
        showMessage({
          message: 'Server Error',
          description:
            'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
          type: 'warning',
          icon: () => (
            <Icon
              name="warning"
              size={30}
              color="#aa2020"
              style={{paddingRight: 20, paddingTop: 14}}
            />
          ),
          position: 'bottom',
        });
      }
      console.log(error);
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  const BottomCard = () => {
    return (
      <View style={styles.bottomCard}>
        <ScrollView>
          <CustomeInput
            placeholder="Email"
            name="Email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Enter valid Email id',
              },
            }}
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
    backgroundColor: COLORS.alert,
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
