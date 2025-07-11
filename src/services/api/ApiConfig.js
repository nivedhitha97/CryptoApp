import axios from 'axios';
import {API_URL} from './ApiConstants';
import {
  convertTimeToSeconds,
  convertTimeToMilliSeconds,
} from '../../utils/constants';

const axiosIns = axios.create({
  // timeout: 100000,
  baseURL: API_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json',
  // },
});
axiosIns.interceptors.request.use(
  async config => {
    config.metadata = {startTime: new Date()};
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
axiosIns.interceptors.response.use(
  async response => {
    // Handle response here
    console.log(response);
    response.config.metadata.endTime = new Date();
    response.duration =
      response.config.metadata.endTime - response.config.metadata.startTime;
    console.log('response duration ', response.duration);
    console.log('api response success::::', response);
    console.log(
      'API Call Success - Response time :: ' +
        convertTimeToSeconds(response.duration) +
        '.' +
        convertTimeToMilliSeconds(response.duration) +
        ' seconds',
    );
    console.log('response ---> ', response);
    return response;
  },
  async function (error) {
    // Handle errors here
    const originalRequest = error.config;
    if (error.response?.status) {
      console.log('error res:::', error.response);
      console.log('error response:::', error);
      switch (error.response.status) {
        case 429:
          console.log('apicall:::4 ', error.response?.status);
          return await axios(originalRequest);
      }
    }
    error.config.metadata.endTime = new Date();
    error.duration =
      error.config.metadata.endTime - error.config.metadata.startTime;
    console.log('error returned duration ', error.duration);
    console.log('error received::: ', error);
    console.log(
      'API Call Failed' +
        error +
        'Response time :: ' +
        convertTimeToSeconds(error.duration) +
        '.' +
        convertTimeToMilliSeconds(error.duration) +
        ' seconds',
    );
    return Promise.reject(error);
  },
);

export {axiosIns};
