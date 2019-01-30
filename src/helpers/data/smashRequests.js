import myPlantsRequests from './myPlantsRequests';
import plantsRequests from './plantRequest';

const getPlantsForGarden = gardenId => new Promise((resolve, reject) => {
  let plants = [];
  plantsRequests.getPlantRequest()
    .then((ps) => {
      plants = ps;
      myPlantsRequests.getMyPlantsByGardenId(gardenId)
        .then((myPlants) => {
          const myPlantIds = myPlants.map(x => x.plantId);
          const myFullPlants = plants.filter(x => myPlantIds.includes(x.id));
          resolve(myFullPlants);
        })
        .catch((err) => {
          console.error('err in getMyPlantsByGardenId', err);
        });
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getPlantsForGarden,
};
