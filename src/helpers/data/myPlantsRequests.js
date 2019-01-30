import axios from 'axios';
import apiKeys from './apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getMyPlantsByGardenId = gardenId => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/myPlants.json?orderBy="gardenId"&equalTo="${gardenId}"`)
    .then((res) => {
      const myPlants = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          myPlants.push(res.data[key]);
        });
      }
      resolve(myPlants);
    })
    .catch(err => reject(err));
});

export default {
  getMyPlantsByGardenId,
};
