/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {COLORS} from '../../constants';

class DoctorProfile extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.doctorProfileContainer}>
          <View style={styles.profilePictureContainer}>
            <Image style={styles.doctorProfileImage} source={null} />
          </View>
          <View style={styles.doctorProfileInfo}>
            <Text style={styles.doctorName}>Dr. John Doe</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class GoogleCalendar extends Component {
  render() {
    return (
      <View style={styles.claender}>
        <Calendar
          style={{
            width: width * 0.91,
          }}
        />
      </View>
    );
  }
}

class TimeSlots extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.timeSlotsContainer}>
          <Text style={styles.timeSlotsTitle}>Morning Slots</Text>
          <View style={styles.timeSlots}>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>9:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>10:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>11:00 AM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.timeSlotsContainer}>
          <Text style={styles.timeSlotsTitle}>Evening Slots</Text>
          <View style={styles.timeSlots}>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>4:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>5:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>6:00 PM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default class BookingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DoctorProfile />
        <GoogleCalendar />
        <TimeSlots />
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');
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
  },
  doctorProfileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
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
  timeSlotsContainer: {
    marginTop: 20,
  },
  timeSlotsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2D2D2D',
    marginBottom: 10,
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    backgroundColor: COLORS.clr30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  timeSlotText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
