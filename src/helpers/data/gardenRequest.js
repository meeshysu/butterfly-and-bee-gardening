import axios from 'axios';
import apiKeys from './apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getGardenByUidRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/gardens.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const gardens = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          gardens.push(res.data[key]);
        });
      }
      resolve(gardens);
    })
    .catch(err => reject(err));
});

const postRequest = garden => axios.post(`${firebaseUrl}/gardens.json`, garden);

const deleteGarden = gardenId => axios.delete(`${firebaseUrl}/gardens/${gardenId}.json`);

const getSingleGarden = gardenId => axios.get(`${firebaseUrl}/gardens/${gardenId}.json`);

const putRequest = (gardenId, garden) => axios.put(`${firebaseUrl}/gardens/${gardenId}.json`, garden);

export default {
  getGardenByUidRequest,
  getSingleGarden,
  deleteGarden,
  postRequest,
  putRequest,
};
