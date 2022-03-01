import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, Switch} from 'react-native';
import Header from '../components/header/Header';
import InputText from '../components/input-text/InputText';
import {normalize} from '../utils/dimensions';
import {getApiRequest, postApiRequest} from '../services/ApiCall';
import {GET_PROFILE_URL, POST_PROFILE_URL} from '../services/Urls';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [isMale, setIsMale] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getApiRequest(GET_PROFILE_URL).then(response => {
      setUserData(response);
      setFirstName(response.results[0].name.first);
      setLastName(response.results[0].name.last);
      setCity(response.results[0].location.city);
      setState(response.results[0].location.state);
      setCountry(response.results[0].location.country);
      setEmail(response.results[0].email);
      setIsMale(response.results[0].gender === 'female' ? false : true);
    });
  }, []);

  useEffect(() => {
    console.log('call post api');
    postApiRequest(POST_PROFILE_URL).then(response => {
      console.log(`post response`, response)
    })
  }, [isMale])

  const toggleSwitch = () => setIsMale(previousState => !previousState);

  const contentView = () => {
    if (userData) {
      return (
        <View style={styles.container}>
          <Text style={styles.editStyle}>Edit</Text>
          <View style={styles.rowContaner}>
            <Text style={styles.titleStyel}>Pictuer</Text>
            <Image
              source={{
                uri: userData.results[0].picture.thumbnail,
              }}
              style={styles.userImageStyle}
            />
          </View>
          <InputText
            title="First Name"
            contanerStyle={styles.inputStyle}
            textValue={firstName}
          />
          <InputText
            title="Last Name"
            contanerStyle={styles.inputStyle}
            textValue={lastName}
          />
          <InputText
            title="City"
            contanerStyle={styles.inputStyle}
            textValue={city}
          />
          <InputText
            title="State"
            contanerStyle={styles.inputStyle}
            textValue={state}
          />
          <InputText
            title="Country"
            contanerStyle={styles.inputStyle}
            textValue={country}
          />

          <InputText
            title="Email"
            contanerStyle={styles.inputStyle}
            textValue={email}
          />

          <View style={styles.rowContaner}>
            <Text style={styles.titleStyel}>
              Gender
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}>
                <Text style={{marginRight: 7}}>
                  {isMale ? 'Male' : 'Female'}
                </Text>
              <Switch
                trackColor={{false: '#767577', true: 'green'}}
                thumbColor={isMale ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isMale}
              />
            </View>
          </View>
        </View>
      );
    } else {
      <View>loading...</View>;
    }
  };

  return (
    <View>
      <Header title="Profile" />
      {contentView()}
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
