import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {CustomText, CustomeButton} from '../../components';
import {COLORS, ROUTES} from '../../constants';

// firebase
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const ImageProfile = ({image, name, dept}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={image} />
      </View>
      <View style={styles.detailcontainer}>
        <CustomText style={styles.name}>{name}</CustomText>
        <CustomText style={styles.name}>{dept}</CustomText>
        <CustomeButton
          style={styles.button}
          text={'Book'}
          onPress={() => navigation.navigate(ROUTES.BOOKING)}
        />
      </View>
    </View>
  );
};

const DoctorListScreen = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const doctorList = [];
        await firestore()
          .collection('Doctor')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const {Department, DocName} = doc.data();
              doctorList.push({id: doc.id, DocName, Department});
            });
          });
        setDoctors(doctorList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctor();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Doctors</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {doctors.map(item => (
          <ImageProfile
            key={item.id}
            image={item.profilePicture}
            name={item.DocName}
            dept={item.Department}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: COLORS.clr10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  item: {
    height: 200,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  profilePictureContainer: {
    height: 140,
    width: 140,
    borderRadius: 100,
    overflow: 'hidden',
    margin: 20,
    borderWidth: 1,
  },
  profilePicture: {
    height: '100%',
    width: '100%',
  },
  detailcontainer: {
    flex: 1,
    marginHorizontal: 20,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.clr30,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DoctorListScreen;
