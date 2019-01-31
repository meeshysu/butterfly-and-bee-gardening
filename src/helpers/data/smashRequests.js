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
        });
    })
    .catch((err) => {
      reject(err);
    });
});

const getPlantsWithMyPlants = gardenId => new Promise((resolve, reject) => {
  let plants = [];
  const allPlants = [];
  plantsRequests.getPlantRequest()
    .then((ps) => {
      plants = ps;
      myPlantsRequests.getMyPlantsByGardenId(gardenId)
        .then((myPlants) => {
          plants.forEach((plant) => {
            const matchingMyPlant = myPlants.find(x => x.plantId === plant.id);
            let newPlant = {};
            if (matchingMyPlant) {
              const myPlantKey = { myPlantId: matchingMyPlant.id };
              newPlant = Object.assign({ ...plant, ...myPlantKey });
            } else {
              const myPlantKey = { myPlantId: 'sal' };
              newPlant = Object.assign({ ...plant, ...myPlantKey });
            }
            allPlants.push(newPlant);
          });
          resolve(allPlants);
        });
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getPlantsForGarden,
  getPlantsWithMyPlants,
};
