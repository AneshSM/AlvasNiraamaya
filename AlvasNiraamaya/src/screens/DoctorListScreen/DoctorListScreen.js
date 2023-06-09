import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {CustomText, CustomeButton} from '../../components';
import {COLORS, ROUTES} from '../../constants';

// firebase
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';

const ImageProfile = ({name, dept, imageURL}) => {
  const navigation = useNavigation();
  const {userform} = useContext(AuthContext);

  const navigate = () => {
    navigation.navigate(ROUTES.BOOKING, {
      params: {name, dept, imageURL},
    });
  };
  return (
    <View style={styles.item}>
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={{uri: imageURL}} />
      </View>
      <View style={styles.detailcontainer}>
        <CustomText style={styles.name}>{name}</CustomText>
        <CustomText factor={28} style={styles.name}>
          Department: {dept}
        </CustomText>
        <CustomeButton
          style={styles.button}
          text={'Book'}
          onPress={
            userform ? navigate : () => navigation.navigate(ROUTES.USER_FORM)
          }
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
              const {Department, DocName, Image} = doc.data();
              doctorList.push({id: doc.id, DocName, Department, Image});
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
            imageURL={item.Image}
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
    objectFit: 'contain',
  },
  detailcontainer: {
    flex: 1,
    marginHorizontal: 20,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  name: {
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
