import axios, {AxiosError, AxiosRequestConfig} from 'axios';
export const getApiRequest = (
    url
  ) => {
    return axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        //handleErrorResponses(errorResponse);
      });
  };
  
  export const postApiRequest = (
    url,
    body,
  ) => {
    return axios
      .post(url, data, {
        headers: {
          'Content-Type': contentType,
          Accept: contentType,
          Authorization: getAuthorizationToken(),
        },
        ...config,
      })
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        //handleErrorResponses(errorResponse);
      });
  };