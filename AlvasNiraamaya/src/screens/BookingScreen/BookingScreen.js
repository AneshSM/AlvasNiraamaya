/* eslint-disable prettier/prettier */
import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import {COLORS, ROUTES} from '../../constants';
import {CustomeButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';

import firestore from '@react-native-firebase/firestore';

import CalendarPicker from 'react-native-calendar-picker';
import {Button} from 'react-native-paper';

import auth from '@react-native-firebase/auth';

import {showMessage} from 'react-native-flash-message';

const {width, height} = Dimensions.get('window');

const DoctorProfile = ({route, data}) => {
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();
  const routes = route.params.params;
  const active = data.time !== '';

  const bookAppointment = async () => {
    if (active) {
      const {name, time, date} = data;
      try {
        await firestore()
          .collection('Appointments')
          .doc(date.toISOString().substring(0, 10))
          .update({
            [time]: {
              name: user.displayName,
              docName: name,
              date: date.toISOString().substring(0, 10),
              time: time,
              status: 'Active',
            },
          })
          .then(() => {
            firestore()
              .collection('Users/' + user.uid + '/Appointments')
              .doc(date.toISOString().substring(0, 10))
              .set({
                [time]: {
                  name: user.displayName,
                  docName: name,
                  date: date.toISOString().substring(0, 10),
                  time: time,
                  status: 'Active',
                },
              });
          })
          .then(() => {
            showMessage({
              message: 'Booked succesfully',
              description: 'Appointment has been successfully assigned to you',
              type: 'success',
              icon: 'auto',
            });
            navigation.navigate(ROUTES.APPOINTMENT);
          });
      } catch (error) {
        if (error.code === 'firestore/not-found') {
          try {
            await firestore()
              .collection('Appointments')
              .doc(date.toISOString().substring(0, 10))
              .set({
                [time]: {
                  name: user.displayName,
                  docName: name,
                  date: date.toISOString().substring(0, 10),
                  time: time,
                },
              })
              .then(() => {
                firestore()
                  .collection('Users/' + user.uid + '/Appointments')
                  .doc(date.toISOString().substring(0, 10))
                  .set({
                    [time]: {
                      name: user.displayName,
                      docName: name,
                      date: date.toISOString().substring(0, 10),
                      time: time,
                      status: 'Active',
                    },
                  });
              })
              .then(() => {
                showMessage({
                  message: 'Booked succesfully',
                  description:
                    'Appointment has been successfully assigned to you',
                  type: 'success',
                  icon: 'auto',
                });
                navigation.navigate(ROUTES.APPOINTMENT);
              });
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.doctorProfileContainer}>
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.doctorProfileImage}
            source={{uri: routes.imageURL}}
          />
        </View>
        <View style={styles.doctorProfileInfo}>
          <Text style={styles.doctorName}>{routes.name}</Text>
          <CustomeButton
            type={active ? 'book' : 'Secondary'}
            text={'Book'}
            onPress={bookAppointment}
          />
        </View>
      </View>
    </View>
  );
};

const ToggleButton = props => {
  const buttonHandler = () => {
    props.setIsSelected(props.label);
    if (props.onClickEvent !== null) {
      props.onClickEvent(props.isSelected);
    }
  };
  return (
    <Button
      disabled={props.disabled}
      rounded
      style={
        props.isSelected === props.label
          ? slotStyles.activeButton
          : slotStyles.button
      }
      onPress={() => buttonHandler()}>
      <Text style={slotStyles.timeSlotText}> {props.label}</Text>
    </Button>
  );
};

const TimeSlots = ({
  date,
  morningSlot: MorningSlot,
  eveningSlot: EveningSlot,
  setTime,
}) => {
  const [constState, setState] = useState();

  const [isSelected, setIsSelected] = useState('');
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  const [morningSlot, setMorningSlot] = useState(null);
  const [eveningSlot, setEveningSlot] = useState(null);

  // booked Slot
  const bookedTimes = [];
  const [slotItem, setSlotItem] = useState(null);

  const morningData = [];
  const eveningData = [];

  useEffect(() => {
    MorningSlot.forEach(element => {
      const obj = {
        label: element.Time,
        value: element.Time,
      };
      morningData.push(obj);
    });
    setMorningSlot(morningData);
    EveningSlot.forEach(element => {
      const obj = {
        label: element.Time,
        value: element.Time,
      };
      eveningData.push(obj);
    });
    setEveningSlot(eveningData);
  }, []);

  useEffect(() => {
    const fetchBookedSlot = async () => {
      try {
        await firestore()
          .collection('Appointments')
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const data = doc.data();
              if (doc.id === date.toISOString().substring(0, 10)) {
                for (const key in data) {
                  bookedTimes.push({label: key, date: doc.id});
                }
              }
            });
          })
          .then(() => {
            if (bookedTimes.length !== 0) {
              setSlotItem(() => {
                let data = new Map();
                for (const key in {...bookedTimes}) {
                  data.set({...bookedTimes}[key]['label'], false);
                }
                return data;
              });
            } else {
              setSlotItem(null);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookedSlot();
  }, [date]);

  useEffect(() => {
    setTime(isSelected);
  }, [isSelected, setTime]);

  const provideslots = slot => {
    if (slot === 'morningslot') {
      let item;
      if (slotItem !== null) {
        item = morningSlot.filter(data => {
          return slotItem.get(data.label) === false ? false : true;
        });
      } else {
        item = morningSlot;
      }
      return item;
    }
    if (slot === 'evevningslot') {
      let item;
      if (slotItem !== null) {
        item = eveningSlot.filter(data => {
          return slotItem.get(data.label) === false ? false : true;
        });
      } else {
        item = eveningSlot;
      }
      return item;
    }
  };

  return (
    <View style={slotStyles.cardContainer}>
      <View style={slotStyles.timeSlotsContainer}>
        <Text style={slotStyles.timeSlotsTitle}>Morning Slots</Text>
        <View style={slotStyles.timeSlots}>
          {morningSlot !== null &&
            provideslots('morningslot').map(item => {
              return (
                <ToggleButton
                  key={item.label}
                  type="Syringe"
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  label={item.label}
                  value={item.value}
                  onClickEvent={data => setIsButtonSelected(data)}
                />
              );
            })}
        </View>
      </View>
      <View style={slotStyles.timeSlotsContainer}>
        <Text style={slotStyles.timeSlotsTitle}>Evening Slots</Text>
        <View style={slotStyles.timeSlots}>
          {eveningSlot !== null &&
            provideslots('evevningslot').map(item => {
              return (
                <ToggleButton
                  key={item.label}
                  type="Syringe"
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  label={item.label}
                  value={item.value}
                  onClickEvent={item => setIsButtonSelected(item)}
                />
              );
            })}
        </View>
      </View>
    </View>
  );
};

const BookingScreen = ({route}) => {
  const [constantState, setState] = useState('');

  // booked data
  const [data, setData] = useState([]);

  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const name = route.params.params.name;
  const [imageURL, setImageURL] = useState();
  // doctors slot
  const [morningSlot, setMorningSlot] = useState(null);
  const [eveningSlot, setEveningSlot] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        await firestore()
          .collection('Doctor')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const {DocName, Image} = doc.data();
              if (DocName === name) {
                setImageURL(Image);
                const data = doc.data().TimeSlot;
                setMorningSlot(data.Morning);
                setEveningSlot(data.Evening);
              }
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctor();
  }, [constantState]);

  useEffect(() => {
    setData({name: name, date: date, time: time, imageURL: imageURL});
  }, [time]);

  useEffect(() => {
    date != null &&
      new Date().toISOString().substring(0, 10) >
        date.toISOString().substring(0, 10) &&
      setDate(null);
  }, [date]);

  return (
    <View style={styles.container}>
      <DoctorProfile route={route} data={data} />
      <CalendarPicker
        selectedDayColor={COLORS.clr30}
        onDateChange={data => {
          setDate(data);
        }}
      />
      {morningSlot !== null && eveningSlot != null && date !== null && (
        <TimeSlots
          date={date}
          morningSlot={morningSlot}
          eveningSlot={eveningSlot}
          setTime={setTime}
        />
      )}
    </View>
  );
};

export default BookingScreen;
const slotStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10,
    flex: 1,
  },
  timeSlotsContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  timeSlotsTitle: {
    fontSize: width / 20,
  },
  timeSlots: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  activeButton: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: COLORS.clr30,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: COLORS.bgclr,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10,
  },
  doctorProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
  },
  profilePictureContainer: {
    height: 140,
    width: 140,
    borderRadius: 100,
    overflow: 'hidden',
    margin: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorProfileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  doctorProfileInfo: {
    marginLeft: 20,
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2D2D2D',
  },
  bookButton: {
    backgroundColor: COLORS.clr10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
    width: '100%',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  calendarContainer: {
    flex: 1,
  },
  claender: {
    width: '100%',
    height: '40%',
    backgroundColor: COLORS.clr60,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
