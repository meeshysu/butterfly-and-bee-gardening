import axios from 'axios';
import apiKeys from './apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getGardenRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/gardens.json`)
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

const deleteGarden = gardenId => axios.delete(`${firebaseUrl}/gardens/${gardenId}.json`);

const gentSingleGarden = gardenId => axios.get(`${firebaseUrl}/gardens/${gardenId}.json`);

export default {
  getGardenRequest,
  gentSingleGarden,
  deleteGarden,
};
