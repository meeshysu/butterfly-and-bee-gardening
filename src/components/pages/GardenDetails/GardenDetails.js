import React from 'react';
import PlantList from '../../PlantList/PlantList';

import gardenRequests from '../../../helpers/data/gardenRequest';
import smashRequests from '../../../helpers/data/smashRequests';

class GardenDetails extends React.Component {
  state = {
    garden: {},
    myPlants: [],
  }

  componentDidMount() {
    const gardenId = this.props.match.params.id;
    gardenRequests.getSingleGarden(gardenId)
      .then((garden) => {
        this.setState({ garden: garden.data });
      })
      .catch((err) => {
        console.error('err in getGardenById', err);
      });

    smashRequests.getPlantsForGarden(gardenId)
      .then((myPlants) => {
        this.setState({ myPlants });
      })
      .catch((err) => {
        console.error('err in getPlantsForGarden', err);
      });
  }

  render() {
    const { garden, myPlants } = this.state;
    return (
      <div className='gardenPlantsForDetails mx-auto'>
        <h3>{garden.name}</h3>
        <PlantList plants={myPlants} />
      </div>
    );
  }
}

export default GardenDetails;
