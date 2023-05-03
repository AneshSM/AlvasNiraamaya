import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {COLORS} from '../../constants';

import firestore from '@react-native-firebase/firestore';
import DepartmentCard from './DepartmentCard';

const DepartmentScreen = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const deptList = [];
        await firestore()
          .collection('Department')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const {DeptName, Desc, Description, Doctor, Image} = doc.data();
              deptList.push({
                id: doc.id,
                DeptName,
                Desc,
                Description,
                Doctor,
                Image,
              });
            });
          });
        setDepartment(deptList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDepartment();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Department</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {department.map(item => (
          <DepartmentCard
            key={item.id}
            title={item.DeptName}
            description={item.Desc}
            info={item.Description}
            doctor={item.Doctor}
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

export default DepartmentScreen;
