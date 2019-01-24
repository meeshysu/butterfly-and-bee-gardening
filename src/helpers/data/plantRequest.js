import axios from 'axios';
import apiKeys from './apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/plants.json`)
    .then((res) => {
      const plants = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          plants.push(res.data[key]);
        });
      }
      resolve(plants);
    })
    .catch(err => reject(err));
});


const getSinglePlant = plantId => axios.get(`${firebaseUrl}/plants/${plantId}.json`);

export default {
  getRequest,
  getSinglePlant,
};
