import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import { Alert } from 'react-native';
export const getApiRequest = (
    url
  ) => {
    return axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        Alert.alert(
          error
        )
      });
  };
  
  export const postApiRequest = (
    url,
    body,
  ) => {
    return axios
      .post(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        Alert.alert(
          error
        )
      });
  };