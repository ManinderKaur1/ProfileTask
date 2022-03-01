import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, Switch} from 'react-native';
import Header from '../components/header/Header';
import InputText from '../components/input-text/InputText';
import {normalize} from '../utils/dimensions';
import {getApiRequest} from '../services/ApiCall';
import {GET_PROFILE_URL} from '../services/Urls';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        getApiRequest(GET_PROFILE_URL).then(response => {
            console.log(`response: -- `, response);
          });
    }, [])


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View>
      <Header title="Profile" />
      <View style={styles.container}>
        <Text style={styles.editStyle}>Edit</Text>
        <View style={styles.rowContaner}>
          <Text style={styles.titleStyel}>Pictuer</Text>
          <Image url={userData?.image} style={styles.userImageStyle} />
        </View>
        <InputText title="Email" contanerStyle={styles.inputStyle} />
        <InputText title="Role" contanerStyle={styles.inputStyle} />
        <InputText title="Industry" contanerStyle={styles.inputStyle} />
        <View style={styles.rowContaner}>
          <Text style={styles.titleStyel}>
            Do you want to make your profile public?
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    margin: normalize(20),
  },
  inputStyle: {
    marginTop: 20,
  },
  editStyle: {
    fontSize: normalize(24),
    color: '#999',
  },
  userImageStyle: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40) / 2,
    backgroundColor: 'black',
  },
  rowContaner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(30),
  },
  titleStyel: {
    flex: 2,
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#333',
  },
});
