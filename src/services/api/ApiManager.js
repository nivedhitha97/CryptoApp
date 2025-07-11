import NetInfo from '@react-native-community/netinfo';
import {API_URL} from './ApiConstants';
import {axiosIns} from './ApiConfig';

export const getApi = async () => {
  console.log('API Call - GET , URL - ' + API_URL);
  try {
    const networkState = await NetInfo.fetch();
    // Check network connectivity
    console.log('network state ', networkState.isConnected);
    if (!networkState.isConnected) {
      console.log('NetworkReachabilityError');
      return Promise.reject(new Error('NetworkReachabilityError'));
    }
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axiosIns.get();
        if (networkState.isConnected) {
          resolve(res.data);
        }
      } catch (err) {
        console.log('API Call - GET Failed', err);
        reject(err);
      }
    });
  } catch (error) {
    console.log('API Call - GET Failed', error);
    return Promise.reject(error);
  }
};
