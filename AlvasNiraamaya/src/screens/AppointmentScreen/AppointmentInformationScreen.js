import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {CustomText, CustomeButton} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const AppointmentInformationScreen = ({route}) => {
  const navigation = useNavigation();
  const routes = route.params.params;
  const appointments = routes.appointments;

  const navigate = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: routes.imageURL}} />
        {/* {
        // <Card key={key} style={styles.card}>
        //   <Card.Title
        //     title={docName}
        //     subtitle={date}
        //     style={styles.card_title}
        //     left={props => (
        //       <Avatar.Icon
        //         {...props}
        //         icon={
        //           status === 'Active'
        //             ? 'check'
        //             : status === 'Cancel'
        //             ? 'cancel'
        //             : 'history'
        //         }
        //         style={{
        //           backgroundColor:
        //             status === 'Active'
        //               ? COLORS.clr30
        //               : status === 'Cancel'
        //               ? 'tomato'
        //               : 'grey',
        //         }}
        //       />
        //     )}
        //   />
        //   {/* <Card.Content>
        //     <Text style={styles.title}>Appointment Details</Text>
        //     <List.Item
        //       title="Doctor"
        //       description={docName}
        //       left={props => <List.Icon {...props} icon="doctor" />}
        //     />
        //     <List.Item
        //       title="Date"
        //       description={date}
        //       left={props => <List.Icon {...props} icon="calendar" />}
        //     />
        //     <List.Item
        //       title="Time"
        //       description={time}
        //       left={props => <List.Icon {...props} icon="clock-outline" />}
        //     />
        //   </Card.Content>
        //   <Card.Actions>
        //     <Icon name="phone" size={30} />
        //     <Icon name="message" size={30} />
        //   </Card.Actions> 
        // </Card>,
         } */}
        <CustomeButton
          type="book"
          onPress={navigate}
          text={'Cancel Appointment'}
          factor={18}
          style={{backgroundColor: 'tomato'}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'justify',
  },
  doctorName: {
    fontSize: 14,
    alignSelf: 'flex-end',
    fontWeight: 600,
    color: COLORS.clr10,
    marginBottom: 15,
  },
});

export default AppointmentInformationScreen;
